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


  const getRandomElementFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];


  const handleSubmit = async () => {
    dispatch({ type: "count_add" })
    const verbToGes = await state.verb.tlumaczenie.toLowerCase()
    const correctVerbTlumaczenieArr = processCorrectVerb(verbToGes)


    console.log(verbInput)
    console.log(correctVerbTlumaczenieArr)

    if (!correctVerbTlumaczenieArr.includes(verbInput.toLocaleLowerCase())) {
      dispatch({ type: "wrong_attempt" })
      setTimeout(() => {
        dispatch({ type: "back_to_normal_input_color" })
      }, 3000);
    }

    if (correctVerbTlumaczenieArr.includes(verbInput.toLocaleLowerCase())) {
      dispatch({ type: "count_zero" })
      dispatch({ type: "inny_czasownik" })
      setVerbInput("")

      dispatch({ type: "correct_attempt" })
      dispatch({ type: "flash_message", payload: `Prawidlowo! - "${state.verb.tlumaczenie}"` })
      setTimeout(() => {
        dispatch({ type: "back_to_normal_input_color" })
      }, 3000);
    }
  }

  const handleodpowiedz = async () => {
    dispatch({ type: "count_zero" })
    const correctVerb = state.verb.tlumaczenie
    console.log(correctVerb)
    setVerbInput(correctVerb)

  }

  const handleInnyCzasownik = () => {
    dispatch({ type: "inny_czasownik" })
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      handleSubmit()
    }
  };


  return (

    <>
      <div id="verb_information">
        <div id="cas_i_tlumaczenie">
          <p id="czasownik">{state.verb.czasownik}</p>
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

      <MainButtons handleInnyCzasownik={handleInnyCzasownik} handleSubmit={handleSubmit} handleodpowiedz={handleodpowiedz} />

    </>

  )
}

export default FormTranslateVerb