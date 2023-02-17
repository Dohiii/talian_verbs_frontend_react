import React, { useContext, useEffect, useState } from 'react'
import DispatchContext from '../DispatchContext'
import { MultiSelect } from "react-multi-select-component";


const options = [
  { label: "IO", value: "IO" },
  { label: "LUI/LEI", value: "LUI" },
  { label: "VOI", value: "VOI" },
  { label: "TU", value: "TU" },
  { label: "NOI", value: "NOI" },
  { label: "LORO", value: "LORO" },
];


function CheckBoxesOsoba() {
  const { dispatchForm } = useContext(DispatchContext)
  const [selected, setSelected] = useState([]);


  useEffect(() => {
    const dataToPass = selected.map(el => el.value)
    dispatchForm({ type: "change_osoby", payload: dataToPass })
  }, [selected])


  return (
    <div className="flex-container-small column mg-1 mg-top-1">
      <div>
        <h3>Wybierz osobę</h3>
        {/* <pre>{JSON.stringify(selected)}</pre> */}
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          overrideStrings={{
            "allItemsAreSelected": "Wszytko zaznaczonę",
            "clearSearch": "Clear Search",
            "clearSelected": "Clear Selected",
            "noOptions": "No options",
            "search": "Szukaj",
            "selectAll": "Zaznacz wszystko",
            "selectAllFiltered": "Select All (Filtered)",
            "selectSomeItems": "Wybierz osobę...",
            "create": "Create",
          }}
        />
      </div>


      {/* 
      <div className="checkbox-wrapper-32 div-with-100">
        <input type="checkbox" value="all" name="checkbox_osoba" id="all" />
        <label htmlFor="all"> Zaznacz wszystko </label>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
          <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
        </svg>
      </div>
      <div className="flex-container-small row wrap">
        <div className="checkbox-wrapper-32 width-80">
          <input type="checkbox" value="IO" name="checkbox_osoba" id="IO" onChange={handleCheckboxChange} />
          <label htmlFor="IO"> IO </label>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
            <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
          </svg>
        </div>

        <div className="checkbox-wrapper-32 width-80">
          <input type="checkbox" value="TU" name="checkbox_osoba" id="TU" onChange={handleCheckboxChange} />
          <label htmlFor="TU"> TU </label>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
            <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
          </svg>
        </div>

        <div className="checkbox-wrapper-32 width-80">
          <input type="checkbox" value="LUI/LEI" name="checkbox_osoba" id="LUI/LEI" onChange={handleCheckboxChange} />
          <label htmlFor="LUI/LEI"> LUI/LEI </label>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
            <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
          </svg>
        </div>

        <div className="checkbox-wrapper-32 width-80">
          <input type="checkbox" value="NOI" name="checkbox_osoba" id="NOI" onChange={handleCheckboxChange} />
          <label htmlFor="NOI"> NOI </label>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
            <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
          </svg>
        </div>

        <div className="checkbox-wrapper-32 width-80">
          <input type="checkbox" value="VOI" name="checkbox_osoba" id="VOI" onChange={handleCheckboxChange} />
          <label htmlFor="VOI"> VOI </label>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
            <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
          </svg>
        </div>

        <div className="checkbox-wrapper-32 width-80">
          <input type="checkbox" value="LORO" name="checkbox_osoba" id="LORO" onChange={handleCheckboxChange} />
          <label htmlFor="LORO"> LORO </label>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
            <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
          </svg>
        </div>
      </div> */}
    </div>
  )
}

export default CheckBoxesOsoba