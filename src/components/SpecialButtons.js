import React from "react"
import { Tooltip, ReactTooltip } from 'react-tooltip'


function SpecialButtons(props) {

  const handleCopyText = (e) => {
    navigator.clipboard.writeText(e.target.textContent)
  }


  return (
    <div className="italian-letters">
      <Tooltip anchorId="à" />
      <button id="à" data-tooltip-content="Skopiuj à" className="btn-italian-letter" onClick={(e) => handleCopyText(e)}>à</button>
      <Tooltip anchorId="è" />
      <button id="è" data-tooltip-content="Skopiuj è" className="btn-italian-letter" onClick={(e) => handleCopyText(e)}>è</button>
      <Tooltip anchorId="é" />
      <button id="é" data-tooltip-content="Skopiuj é" className="btn-italian-letter" onClick={(e) => handleCopyText(e)}>é</button>
      <Tooltip anchorId="ì" />
      <button id="ì" data-tooltip-content="Skopiuj ì" className="btn-italian-letter" onClick={(e) => handleCopyText(e)}>ì</button>
      <Tooltip anchorId="ò" />
      <button id="ò" data-tooltip-content="Skopiuj ò" className="btn-italian-letter" onClick={(e) => handleCopyText(e)}>ò</button>
    </div>
  )
}

export default SpecialButtons