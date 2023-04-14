import './App.css';
import { useEffect, useState } from 'react';
import StateContext from './StateContex';
import DispatchContext from './DispatchContext';
import { useImmerReducer } from 'use-immer';
import FormTop from './components/FormTop';
import ContainerMainSection from './components/ContainerMainSection';
import Navbar from './components/Navbar';
import FormTopVerbFull from './components/FormTopVerbFull';
import Footer from './components/Footer';
import FlashMessages from './components/FlashMessages';
import filterVerbsOnLocalDb_new from './components/helpers/filterVerbsOnLocalDb_new';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import FormTranslateVerb from './components/FormTranslateVerb';



const initialFormState = {
  category: [],
  zwrotne: false,
  osoba: [],
  tense: [],
}

const initialState = {
  topFormSelected: true,
  tlumaczenieSelected: false,
  isLoading: true,
  count: 0,
  fullVerbCount: 0,
  inny_czasownik_clicked: 0,
  verb: {},
  errorColor: "#E97777",
  successColor: "#B6E2A1",
  inputColor: "#333",
  originalInputColor: "#333",
  inputValue: "",
  icon: "block",
  flashMessages: [],
};


function App() {
  const [state, dispatch] = useImmerReducer(reducer, initialState)
  const [stateForm, dispatchForm] = useImmerReducer(formReducer, initialFormState)

  function formReducer(state, action) {
    switch (action.type) {
      case "change_category":
        state.category = action.payload
        return
      case "change_zwrotne":
        // let zwrotneBool = (action.payload === "true")
        state.zwrotne = action.payload
        return
      case "change_osoby":
        state.osoba = action.payload
        return
      case "change_tense":
        state.tense = action.payload
        return
    }
  }


  function reducer(state, action) {
    switch (action.type) {
      case "enable_forme_czasownika":
        state.topFormSelected = true
        return
      case "enable_odmien_czasownik":
        state.topFormSelected = false
        return
      case "stop_loading":
        state.isLoading = false
        return
      case "set_verb_in_state":
        state.verb = action.payload
        return
      case "count_add":
        state.count++
        return
      case "count_zero":
        state.count = 0
        return
      case "count_minus_one":
        state.count = -1
        return
      case "full_verb_count_add":
        state.fullVerbCount++
        return
      case "full_verb_coun_zero":
        state.fullVerbCount = 0
        return
      case "inny_czasownik":
        state.count = 0
        state.inny_czasownik_clicked++
        return
      case "inny_czasownik_dla_tlumaczenia":
        state.inny_czasownik_clicked++
        return
      case "submit_czasownik_forme":
        return
      case "wrong_attempt":
        state.inputColor = state.errorColor;
        return
      case "correct_attempt":
        state.inputColor = state.successColor
        return
      case "back_to_normal_input_color":
        state.inputColor = state.originalInputColor;
        return
      case "flash_message":
        state.flashMessages.push(action.payload)
        return

    }
  }


  // async function fetchDataToServer() {
  //   let response
  //   let retries = 0

  //   while (!response) {
  //     try {
  //       const res = await fetch("https://italian-verbs.onrender.com/api/v1/verbs", {
  //         method: "POST",
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           category: stateForm.category,
  //           zwrotne: stateForm.zwrotne,
  //           osoba: stateForm.osoba,
  //           tense: stateForm.tense,
  //         })
  //       })
  //       const result = await res.json()

  //       if (result) {
  //         response = "OK"
  //         dispatch({ type: "stop_loading" })
  //         dispatch({ type: "set_verb_in_state", payload: result.verb })



  //       }
  //       return
  //     } catch (e) {
  //       if (retries > 30) {
  //         throw new Error("Oops something go wrong, try to reload the page please")
  //       }
  //       console.log(e)
  //     }
  //     retries++;
  //     console.log(`Request failed, retrying (${retries})...`);
  //   }
  // }


  async function fetchDataToServer() {
    try {
      let response = undefined;
      let retries = 0;

      while (!response || response === "ERROR") {
        const localVerb = await filterVerbsOnLocalDb_new(stateForm.category, stateForm.zwrotne, stateForm.osoba, stateForm.tense);


        if (localVerb.verb) {
          console.log(localVerb.verb)
          dispatch({ type: "set_verb_in_state", payload: localVerb.verb });
          dispatch({ type: "stop_loading" });
          response = "OK";
        } else {

          response = "ERROR";
        }

        if (response === "ERROR") {
          throw new Error("No such verb found");
        }

        retries++;

        console.log(`Request failed, retrying (${retries})...`);

        if (retries > 30) {
          throw new Error("Oops something go wrong, try to reload the page please");
        }

        await new Promise(resolve => setTimeout(resolve, 1000)); // wait for 1 second before retrying
      }
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "stop_loading" });
      dispatch({ type: "set_error", payload: error.message });
    }
  }






  useEffect(() => {
    fetchDataToServer()
  }, [stateForm, state.inny_czasownik_clicked])

  const [activeComponent, setActiveComponent] = useState('FormTop');


  const handleNavToggle = (componentName) => {

    setActiveComponent(componentName);
  };

  return (
    <StateContext.Provider value={{ state, stateForm }}>
      <DispatchContext.Provider value={{ dispatch, dispatchForm }}>
        <BrowserRouter>
          <ContainerMainSection>

            <>
              <div className="logo">
                <img src="/CiSTA Czarny.png" alt="" ></img>
                <div className="links">
                  <a className={activeComponent === 'FormTop' ? 'active' : ''} onClick={() => handleNavToggle('FormTop')} >Forma czasownika</a>
                  <a className={activeComponent === 'FormTopVerbFull' ? 'active' : ''} onClick={() => handleNavToggle('FormTopVerbFull')} >Odmień czasownik</a>
                  <a className={activeComponent === 'FormTranslateVerb' ? 'active' : ''} onClick={() => handleNavToggle('FormTranslateVerb')} >Przetłumacz czasownik</a>
                </div>
              </div>
            </>
            <FlashMessages messages={state.flashMessages} />

            {activeComponent === 'FormTop' && <FormTop />}
            {activeComponent === 'FormTopVerbFull' && <FormTopVerbFull />}
            {activeComponent === 'FormTranslateVerb' && <FormTranslateVerb />}

            {/* {state.topFormSelected ? <FormTop /> : <FormTopVerbFull />} */}
            {/* {<FormTranslateVerb />} */}

            <Footer />
          </ContainerMainSection>
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider >

  );
}

export default App;
