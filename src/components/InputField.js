import React, { useContext } from 'react'
import StateContext from '../StateContex'

function InputField(props) {
  const { state } = useContext(StateContext)


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      props.handleSubmit()
    }
  };

  return (
    <div>
      <label htmlFor="name" id="tense"></label>
      <div id="correctWord">
        <label htmlFor="name" id="osoba">{state.verb.pluc}</label>
        <div className="input-icons">
          <i className="fa fa-check-circle fa-2xl icon" aria-hidden="true"></i>
          <input type="search" value={props.verbInput}
            style={{ borderColor: state.inputColor }} onKeyDown={handleKeyDown} onChange={e => props.setVerbInput(e.target.value.toLowerCase())} id="name" placeholder="Wpisz poprawny czasownik" autoComplete="off" />

        </div>
      </div>
    </div>
  )
}

export default InputField