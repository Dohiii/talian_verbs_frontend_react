import React, { useContext, useState } from 'react'
import StateContext from '../StateContex'


function MainButtons(props) {
  const { state } = useContext(StateContext)


  return (
    <div className="buttons-container">
      <input className='main-button' id="submit" type="submit" value="Zatwierdź" onClick={props.handleSubmit} />
      <input className='main-button' type="submit" id="new_verb" value="Inny czasownik" onClick={props.handleInnyCzasownik} />
      {state.count >= 3 ? <input type="submit" id="pdopowiedż" value="Odpowiedz" onClick={props.handleodpowiedz} /> : ""}
    </div>
  )
}

export default MainButtons