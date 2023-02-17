import React, { useContext, useEffect, useState } from 'react'
import DispatchContext from '../DispatchContext'
import { MultiSelect } from "react-multi-select-component";


const options = [
  { label: "Indicativo", value: "Indicativo", disabled: true },
  { label: "Presente Indicativo", value: "Presente Indicativo" },
  { label: "Passato Prossimo", value: "Passato Prossimo" },
  { label: "Imperfetto Indicativo", value: "Imperfetto Indicativo" },
  { label: "Trapassato Prossimo", value: "Trapassato Prossimo" },
  { label: "Passato Remoto", value: "Passato Remoto" },
  { label: "Trapassato Remoto", value: "Trapassato Remoto" },
  { label: "Futuro Semplice", value: "Futuro Semplice" },
  { label: "Futuro Anteriore", value: "Futuro Anteriore" },
  { label: "Congiuntivo", value: "Congiuntivo", disabled: true },
  { label: "Presente Congiuntivo", value: "Presente Congiuntivo" },
  { label: "Passato Congiuntivo", value: "Passato Congiuntivo" },
  { label: "Imperfetto Congiuntivo", value: "Imperfetto Congiuntivo" },
  { label: "Trapassato Congiuntivo", value: "Trapassato Congiuntivo" },
  { label: "Condizionale", value: "Condizionale", disabled: true },
  { label: "Presente Condizionale", value: "Presente Condizionale" },
  { label: "Passato Condizionale", value: "Passato Condizionale" },
  { label: "Imperativo", value: "Imperativo", disabled: true },
  { label: "Presente Imperativo", value: "Presente Imperativo" },
];




function CheckboxesTense() {
  const { dispatchForm } = useContext(DispatchContext)
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const dataToPass = selected.map(el => el.value)
    dispatchForm({ type: "change_tense", payload: dataToPass })
  }, [selected])


  return (

    <div className="category mg-1">
      <h3>Wybierz czas</h3>
      <MultiSelect
        className='drop-down'
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
          "selectSomeItems": "Wybierz czas...",
          "create": "Create",
        }}
      />
    </div >

    // <div className="flex-container-small column mg-2">
    //   <hr />
    //   <h3 className="wybirerz-czas-h3">Wybierz czas</h3>




    //   <div className="checkbox-wrapper-32 div-with-100">
    //     <input type="checkbox" value="all-tense" name="checkbox_osoba" id="all-tense" />
    //     <label htmlFor="all-tense"> Zaznacz wszystko </label>
    //     <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    //       <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //       <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //     </svg>
    //   </div>

    //   <div className="checkboxes">





    //     <div className="column-1">
    //       <h3>Indicativo</h3>



    //       <div className="checkbox-wrapper-32">
    //         <input type="checkbox" value="Presente Indicativo" name="checkbox_char" id="Presente Indicativo" onChange={handleCheckboxChange} />
    //         <label htmlFor="Presente Indicativo"> Presente Indicativo </label>
    //         <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //           <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //         </svg>
    //       </div>

    //       <div className="checkbox-wrapper-32">
    //         <input type="checkbox" value="Passato Prossimo" name="checkbox_char" id="Passato Prossimo" onChange={handleCheckboxChange} />
    //         <label htmlFor="Passato Prossimo"> Passato Prossimo </label>
    //         <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //           <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //         </svg>
    //       </div>

    //       <div className="checkbox-wrapper-32">
    //         <input type="checkbox" value="Imperfetto Indicativo" name="checkbox_char" id="Imperfetto Indicativo" onChange={handleCheckboxChange} />
    //         <label htmlFor="Imperfetto Indicativo"> Imperfetto Indicativo </label>
    //         <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //           <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //         </svg>
    //       </div>

    //       <div className="checkbox-wrapper-32">
    //         <input type="checkbox" value="Trapassato Prossimo" name="checkbox_char" id="Trapassato Prossimo" onChange={handleCheckboxChange} />
    //         <label htmlFor="Trapassato Prossimo"> Trapassato Prossimo </label>
    //         <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //           <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //         </svg>
    //       </div>

    //       <div className="checkbox-wrapper-32">
    //         <input type="checkbox" value="Passato Remoto" name="checkbox_char" id="Passato Remoto" onChange={handleCheckboxChange} />
    //         <label htmlFor="Passato Remoto"> Passato Remoto </label>
    //         <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //           <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //         </svg>
    //       </div>

    //       <div className="checkbox-wrapper-32">
    //         <input type="checkbox" value="Trapassato Remoto" name="checkbox_char" id="Trapassato Remoto" onChange={handleCheckboxChange} />
    //         <label htmlFor="Trapassato Remoto"> Trapassato Remoto </label>
    //         <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //           <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //         </svg>
    //       </div>

    //       <div className="checkbox-wrapper-32">
    //         <input type="checkbox" value="Futuro Semplice" name="checkbox_char" id="Futuro Semplice" onChange={handleCheckboxChange} />
    //         <label htmlFor="Futuro Semplice"> Futuro Semplice </label>
    //         <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //           <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //         </svg>
    //       </div>

    //       <div className="checkbox-wrapper-32">
    //         <input type="checkbox" value="Futuro Anteriore" name="checkbox_char" id="Futuro Anteriore" onChange={handleCheckboxChange} />
    //         <label htmlFor="Futuro Anteriore"> Futuro Anteriore </label>
    //         <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //           <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //         </svg>
    //       </div>
    //     </div>

    //     <div className="column-2">
    //       <hr />
    //       <h3>Congiuntivo</h3>
    //       <div className="checkbox-wrapper-32">
    //         <input type="checkbox" value="Presente Congiuntivo" name="checkbox_char" id="Presente Congiuntivo" onChange={handleCheckboxChange} />
    //         <label htmlFor="Presente Congiuntivo"> Presente Congiuntivo </label>
    //         <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //           <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //         </svg>
    //       </div>

    //       <div className="checkbox-wrapper-32">
    //         <input type="checkbox" value="Passato Congiuntivo" name="checkbox_char" id="Passato Congiuntivo" onChange={handleCheckboxChange} />
    //         <label htmlFor="Passato Congiuntivo"> Passato Congiuntivo </label>
    //         <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //           <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //         </svg>
    //       </div>

    //       <div className="checkbox-wrapper-32">
    //         <input type="checkbox" value="Imperfetto Congiuntivo" name="checkbox_char" id="Imperfetto Congiuntivo" onChange={handleCheckboxChange} />
    //         <label htmlFor="Imperfetto Congiuntivo"> Imperfetto Congiuntivo </label>
    //         <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //           <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //         </svg>
    //       </div>

    //       <div className="checkbox-wrapper-32">
    //         <input type="checkbox" value="Trapassato Congiuntivo" name="checkbox_char" id="Trapassato Congiuntivo" onChange={handleCheckboxChange} />
    //         <label htmlFor="Trapassato Congiuntivo"> Trapassato Congiuntivo </label>
    //         <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //           <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //         </svg>
    //       </div>

    //       <hr />
    //       <h3>Condizionale</h3>
    //       <div className="checkbox-wrapper-32">
    //         <input type="checkbox" value="Presente Condizionale" name="checkbox_char" id="Presente Condizionale" onChange={handleCheckboxChange} />
    //         <label htmlFor="Presente Condizionale"> Presente Condizionale </label>
    //         <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //           <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //         </svg>
    //       </div>

    //       <div className="checkbox-wrapper-32">
    //         <input type="checkbox" value="Passato Condizionale" name="checkbox_char" id="Passato Condizionale" onChange={handleCheckboxChange} />
    //         <label htmlFor="Passato Condizionale"> Passato Condizionale </label>
    //         <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //           <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //         </svg>
    //       </div>

    //       <hr />
    //       <h3>Imperativo</h3>
    //       <div className="checkbox-wrapper-32">
    //         <input type="checkbox" value="Presente Imperativo" name="checkbox_char" id="Presente Imperativo" onChange={handleCheckboxChange} />
    //         <label htmlFor="Presente Imperativo"> Presente Imperativo </label>
    //         <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M 10 10 L 90 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //           <path d="M 90 10 L 10 90" stroke="#000" strokeDasharray="113" strokeDashoffset="113"></path>
    //         </svg>
    //       </div>
    //     </div>
    //   </div>
    // </div>

  )
}

export default CheckboxesTense