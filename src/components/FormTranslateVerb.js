import React, { useState, useContext, useEffect } from 'react'
import InputField from './InputField'
import MainButtons from './MainButtons'
import SpecialButtons from './SpecialButtons'
import VerbInformation from './VerbInformation'
import DispatchContext from '../DispatchContext'
import StateContext from '../StateContex'
import processCorrectVerb from './helpers/processCorrectWord'
import verbsData from '../assets/db/db'
import LoadingDotsIcon from './LoadingDotsicon'





function FormTranslateVerb() {
  const { state } = useContext(StateContext)
  const { dispatch } = useContext(DispatchContext)
  const [verbInput, setVerbInput] = useState("")
  const [verbToGes, setVerbToGes] = useState("")
  const [correctVerb, setCorrectVerb] = useState([])


  const getRandomElementFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];



  const fetchNewVerb = async () => {
    const verb = getRandomElementFromArray(verbsData)
    const correctVerbTlumaczenie = processCorrectVerb(verb.tlumaczenie)

    const lowercaseCorrectVerbTlumaczenie = correctVerbTlumaczenie.map(verb => verb.toLowerCase());

    setVerbToGes(verb.czasownik)
    setCorrectVerb(lowercaseCorrectVerbTlumaczenie)
  }

  useEffect(() => {
    fetchNewVerb()
  }, [])

  const handleSubmit = async () => {
    dispatch({ type: "count_add" })


    if (!correctVerb.includes(verbInput)) {

      console.log(correctVerb)
      console.log(verbInput)

      dispatch({ type: "wrong_attempt" })
      setTimeout(() => {
        dispatch({ type: "back_to_normal_input_color" })
      }, 3000);
    }

    if (correctVerb.includes(verbInput)) {
      dispatch({ type: "count_zero" })
      dispatch({ type: "inny_czasownik" })
      setVerbInput("")

      fetchNewVerb()

      dispatch({ type: "correct_attempt" })
      dispatch({ type: "flash_message", payload: `Prawidlowo! - "${correctVerb}"` })
      setTimeout(() => {
        dispatch({ type: "back_to_normal_input_color" })
      }, 3000);
    }
  }

  const handleodpowiedz = () => {
    dispatch({ type: "count_zero" })
    const correctVer = getRandomElementFromArray(correctVerb)
    setVerbInput(correctVer)
  }

  const handleInnyCzasownik = () => {
    fetchNewVerb()
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      handleSubmit()
    }
  };


  return (

    <>
      {/* <div id="verb_information">
        <div id="cas_i_tlumaczenie">
          {state.isLoading ? <LoadingDotsIcon /> : <p id="czasownik">{verb}</p>}
          {state.isLoading ? "" : <p id="tlumaczenie">{`(${state.verb.tlumaczenie})`}</p>}
        </div>
        <p id="tense">{state.verb.tense}</p>
      </div> */}

      <div id="verb_information">
        <div id="cas_i_tlumaczenie">
          <p id="czasownik">{verbToGes}</p>
        </div>
      </div>
      <div>
        <label htmlFor="name" id="tense"></label>
        <div id="correctWord">
          <label htmlFor="name" id="osoba">{state.verb.pluc}</label>
          <div className="input-icons">
            <i className="fa fa-check-circle fa-2xl icon" aria-hidden="true"></i>
            <input type="search" value={verbInput}
              style={{ borderColor: state.inputColor }} onKeyDown={handleKeyDown} onChange={e => setVerbInput(e.target.value.toLowerCase())} id="name" placeholder={"Wpisz tłumaczenie"} autoComplete="off" />

          </div>
        </div>
      </div>


      {/* <InputField handleSubmit={handleSubmit} verbInput={verbInput || ""} setVerbInput={setVerbInput} placeholder={"Wpisz tłumaczenie"} /> */}
      <MainButtons handleInnyCzasownik={handleInnyCzasownik} handleSubmit={handleSubmit} handleodpowiedz={handleodpowiedz} />

    </>

  )
}

export default FormTranslateVerb