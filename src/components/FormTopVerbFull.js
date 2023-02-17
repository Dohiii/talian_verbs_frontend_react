import React, { useContext, useEffect, useRef, useState } from 'react'
import DispatchContext from '../DispatchContext'
import StateContext from '../StateContex'
import InputOsoby from './InputOsoby'
import MainButtons from './MainButtons'
import SpecialButtons from './SpecialButtons'
import processCorrectVerb from './helpers/processCorrectWord'
import VerbInformation from './VerbInformation'

function FormTopVerbFull() {
  const { state } = useContext(StateContext)
  const { dispatch } = useContext(DispatchContext)
  const [verbInput, setVerbInput] = useState("")
  const [verbFull, setVerbFull] = useState({
    "IO": "",
    "TU": "",
    "LUI": "",
    "NOI": "",
    "VOI": "",
    "LORO": ""
  })

  const verbFullCorrect = {
    "IO": state.verb.IO,
    "TU": state.verb.TU,
    "LUI": state.verb.LUI,
    "NOI": state.verb.NOI,
    "VOI": state.verb.VOI,
    "LORO": state.verb.LORO
  }

  const inputRefs = [
    useRef(), // Ref for the first input
    useRef(), // Ref for the second input
    useRef(), // Ref for the third input
    useRef(), // Ref for the third input
    useRef(), // Ref for the third input
    useRef(), // Ref for the third input
  ];

  const handleInputChange = (e) => {
    setVerbFull({ ...verbFull, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    console.log(verbFull)
  }, [verbFull])


  const handleKeyDown = (e, index) => {
    const correctVerb = processCorrectVerb(verbFullCorrect[e.target.name])
    const inputElementDOM = document.getElementById(e.target.name);
    if (e.key === 'Enter') {
      if (correctVerb.includes(verbFull[e.target.name])) {
        inputElementDOM.style.borderColor = state.successColor
        if (index < 5) {
          inputRefs[index + 1].current.focus(); // Focus the next input
        }
        dispatch({ type: "full_verb_count_add" })
      } else {
        inputElementDOM.style.borderColor = state.errorColor
        setTimeout(() => {
          inputElementDOM.style.borderColor = state.originalInputColor
        }, 3000);
      }
    }
  };

  const check_if_all_correct = () => {
    if (JSON.stringify(verbFull) === JSON.stringify(verbFullCorrect)) {
      inputRefs.forEach(ref => {
        const input = ref.current
        input.value = ""
        input.style.borderColor = "black"
        dispatch({ type: "full_verb_coun_zero" })
        dispatch({ type: "inny_czasownik" })
        dispatch({ type: "flash_message", payload: "Wszystki formę są prawidlowę" })

      })
    }
  }

  const handleSubmit = () => {
    dispatch({ type: "count_add" })
    inputRefs.forEach(ref => {
      const input = ref.current
      if (input.value === verbFullCorrect[input.id]) {
        // dispatch({ type: "full_verb_count_add" })
        input.style.borderColor = state.successColor
        check_if_all_correct()
        console.log(verbFull)
      }

      // if (input.value !== verbFullCorrect[input.id]) {
      //   input.style.borderColor = state.errorColor
      //   setTimeout(() => {
      //     input.style.borderColor = state.originalInputColor
      //   }, 3000);
      // }

    })
  }

  const handleodpowiedz = () => {
    dispatch({ type: "full_verb_coun_zero" })
    dispatch({ type: "count_zero" })

    inputRefs.forEach(ref => {
      const input = ref.current
      input.value = verbFullCorrect[input.id]
      setVerbFull(verbFullCorrect)
    })
  }

  const handleInnyCzasownik = () => {
    dispatch({ type: "inny_czasownik" })
  }


  return (
    <>
      <VerbInformation />
      <InputOsoby inputRefs={inputRefs} verbInput={verbInput || ""} setVerbInput={setVerbInput} handleInputChange={handleInputChange} handleKeyDown={handleKeyDown} />
      <SpecialButtons />
      <MainButtons handleSubmit={handleSubmit} handleodpowiedz={handleodpowiedz} handleInnyCzasownik={handleInnyCzasownik} />


    </>
  )
}

export default FormTopVerbFull