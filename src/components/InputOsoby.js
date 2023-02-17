import React from 'react'

function InputOsoby(props) {

  return (
    <div className="osoby">

      <div className="inputs-osoba">
        <label htmlFor="IO" id="tense">IO</label>
        <input ref={props.inputRefs[0]} type="search" id="IO" name="IO" placeholder="Wpisz poprawny czasownik" autoComplete="off" className="input-osoba" onKeyDown={(event) => props.handleKeyDown(event, 0)} onChange={props.handleInputChange} />
      </div>
      <div className="inputs-osoba">
        < label htmlFor="TU" id="tense">TU</label>
        <input ref={props.inputRefs[1]} type="search" id="TU" name="TU" placeholder="Wpisz poprawny czasownik" autoComplete="off" className="input-osoba" onKeyDown={(event) => props.handleKeyDown(event, 1)} onChange={props.handleInputChange} />
      </div>
      <div className="inputs-osoba">
        <label htmlFor="LUI" id="tense">LUI/LEI</label>
        <input ref={props.inputRefs[2]} type="search" id="LUI" name="LUI" placeholder="Wpisz poprawny czasownik" autoComplete="off" className="input-osoba" onKeyDown={(event) => props.handleKeyDown(event, 2)} onChange={props.handleInputChange} />
      </div>
      <div className="inputs-osoba">
        <label htmlFor="NOI" id="tense">NOI</label>
        <input ref={props.inputRefs[3]} type="search" id="NOI" name="NOI" placeholder="Wpisz poprawny czasownik" autoComplete="off" className="input-osoba" onKeyDown={(event) => props.handleKeyDown(event, 3)} onChange={props.handleInputChange} />
      </div>
      <div className="inputs-osoba">
        <label htmlFor="VOI" id="tense">VOI</label>
        <input ref={props.inputRefs[4]} type="search" id="VOI" name="VOI" placeholder="Wpisz poprawny czasownik" autoComplete="off" className="input-osoba" onKeyDown={(event) => props.handleKeyDown(event, 4)} onChange={props.handleInputChange} />
      </div>
      <div className="inputs-osoba">
        <label htmlFor="LORO" id="tense">LORO</label>
        <input ref={props.inputRefs[5]} type="search" id="LORO" name="LORO" placeholder="Wpisz poprawny czasownik" autoComplete="off" className="input-osoba" onKeyDown={(event) => props.handleKeyDown(event, 5)} onChange={props.handleInputChange} />
      </div>


    </div>
  )
}

export default InputOsoby