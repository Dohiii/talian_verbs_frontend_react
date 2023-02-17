import React, { useContext, useState } from 'react'
import DispatchContext from '../DispatchContext'

function Navbar() {
  const linkColors = ["#000", "#8a8989"]
  const [firstlinkColor, setFirstLinkColor] = useState(linkColors[0])
  const [secondLinkColor, setSecondLinkColor] = useState(linkColors[1])
  const { dispatch } = useContext(DispatchContext)


  const handleTopForm = (e) => {
    e.preventDefault()
    dispatch({ type: "enable_forme_czasownika" })
    setFirstLinkColor(linkColors[0])
    setSecondLinkColor(linkColors[1])
    dispatch({ type: "count_zero" })
    dispatch({ type: "full_verb_coun_zero" })
  }

  const handleVerbFull = (e) => {
    e.preventDefault()
    dispatch({ type: "enable_odmien_czasownik" })
    setFirstLinkColor(linkColors[1])
    setSecondLinkColor(linkColors[0])
    dispatch({ type: "count_zero" })
    dispatch({ type: "full_verb_coun_zero" })
  }

  return (
    <>
      <div className="logo">
        <img src="/CiSTA Czarny.png" alt="" ></img>
        <div className="links">
          <a style={{ color: firstlinkColor }} href="./index.html" onClick={handleTopForm}>Podaj formę czasownika</a>
          <a style={{ color: secondLinkColor }} href="./caly_czasownik.html" onClick={handleVerbFull}>Odmień czasownik</a>
        </div>
      </div>
    </>
  )
}

export default Navbar