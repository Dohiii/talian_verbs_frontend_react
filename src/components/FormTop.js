import React, { useState, useContext } from 'react'
import InputField from './InputField'
import MainButtons from './MainButtons'
import SpecialButtons from './SpecialButtons'
import VerbInformation from './VerbInformation'
import DispatchContext from '../DispatchContext'
import StateContext from '../StateContex'
import processCorrectVerb from './helpers/processCorrectWord'
import FormBottom from './FormBottom'

function FormTop() {
  const { state } = useContext(StateContext)
  const { dispatch } = useContext(DispatchContext)
  const [verbInput, setVerbInput] = useState("")

  function addMyValueToInput(event) {
    let newVerb = verbInput + event.target.textContent
    setVerbInput(newVerb)
  }

  const handleSubmit = async () => {
    const verb = state.verb
    dispatch({ type: "count_add" })

    // checking if one correct Verb or multiple and return string or array:
    const correctVerb = processCorrectVerb(verb.correctWord)

    if (!correctVerb.includes(verbInput)) {
      dispatch({ type: "wrong_attempt" })
      setTimeout(() => {
        dispatch({ type: "back_to_normal_input_color" })
      }, 3000);
    }

    if (correctVerb.includes(verbInput)) {
      dispatch({ type: "count_zero" })
      dispatch({ type: "inny_czasownik" })
      setVerbInput("")

      dispatch({ type: "correct_attempt" })
      dispatch({ type: "flash_message", payload: "Prawidlowo" })
      setTimeout(() => {
        dispatch({ type: "back_to_normal_input_color" })
      }, 3000);
    }
  }

  const handleodpowiedz = () => {
    dispatch({ type: "count_zero" })
    const correctVerb = state.verb.correctWord
    console.log(correctVerb)
    setVerbInput(correctVerb)
  }

  const handleInnyCzasownik = () => {
    dispatch({ type: "inny_czasownik" })
  }


  return (

    <>
      <VerbInformation />
      <InputField handleSubmit={handleSubmit} verbInput={verbInput || ""} setVerbInput={setVerbInput} placeholder={"Wpisz poprawny czasownik"} />
      <SpecialButtons addMyValueToInput={addMyValueToInput} />
      <MainButtons handleInnyCzasownik={handleInnyCzasownik} handleSubmit={handleSubmit} handleodpowiedz={handleodpowiedz} attempts={3} />
      <FormBottom />
    </>

  )
}

export default FormTop