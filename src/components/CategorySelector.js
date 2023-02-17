import React, { useContext, useEffect, useState } from 'react'
import DispatchContext from '../DispatchContext'
import { MultiSelect } from "react-multi-select-component";


const options = [
  { label: "regularny", value: "regularny" },
  { label: "nieregularny", value: "nieregularny" },
];


function CategorySelector() {
  const { dispatchForm } = useContext(DispatchContext)
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const dataToPass = selected.map(el => el.value)
    dispatchForm({ type: "change_category", payload: dataToPass })
  }, [selected])





  return (
    <div className="category mg-1">
      <h3>Wybierz kategorię</h3>
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

export default CategorySelector