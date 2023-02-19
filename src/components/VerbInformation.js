import React, { useContext, useEffect } from "react"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContex"
import LoadingDotsIcon from "./LoadingDotsicon"

function VerbInformation() {
  const { state } = useContext(StateContext)
  const { dispatch } = useContext(DispatchContext)


  if (!state) {
    dispatch({ type: "inny_czasownik" })
  }

  if (state.verb === 'no such verb') {
    return (
      <>
        <p >Oooops... Nie moge znalezc czasownika z taką konfigurację :( </p>
        <p >Sprobuje jescze raz </p>

      </>
    )
  }

  return (
    <>
      <div id="verb_information">
        <div id="cas_i_tlumaczenie">
          {state.isLoading ? <LoadingDotsIcon /> : <p id="czasownik">{state.verb.czasownik}</p>}
          {state.isLoading ? "" : <p id="tlumaczenie">{`(${state.verb.tlumaczenie})`}</p>}
        </div>
        <p id="tense">{state.verb.tense}</p>
      </div>
    </>
  )
}

export default VerbInformation