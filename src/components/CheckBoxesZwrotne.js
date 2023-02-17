import React, { useContext, useEffect, useState } from 'react'
import DispatchContext from '../DispatchContext'
import { MultiSelect } from "react-multi-select-component";


const options = [
  { label: "Tak", value: true },
  { label: "Nie", value: false },
];


function CheckboxesZwrotne() {
  const { dispatchForm } = useContext(DispatchContext)
  const [selected, setSelected] = useState([]);


  useEffect(() => {
    const dataToPass = selected.map(el => el.value)
    dispatchForm({ type: "change_zwrotne", payload: dataToPass })
  }, [selected])





  return (
    <div className="category mg-1">
      <h3>Zwrotne</h3>
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
          "selectSomeItems": "Wybierz kategorię...",
          "create": "Create",
        }}
      />


      {/* <label id="category-label" htmlFor="category">Wybierz kategorię</label>
      <select id="category" name="categoria-osoba" className="categoria-osoba" onChange={selectedCategory}>
        <option value="all">Wszystkie</option>
        <option value="regularny">regularny</option>
        <option value="nieregularny">nieregularny</option>
      </select> */}
    </div >
  )
}

export default CheckboxesZwrotne