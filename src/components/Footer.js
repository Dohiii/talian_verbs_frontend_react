import { Link } from '@mui/material'
import React from 'react'

function Footer() {
  return (

    <footer>

      {/* <div className="logo">
        <img src="/CiSTA Czarny.png" alt="" ></img>
        <div className="links">
          <p></p>
        </div>
      </div> */}

      <div>
        <p>Created by</p>
        <Link href="https://www.linkedin.com/in/valerii-dorokhov-534312211/" color="inherit" >
          VD
        </Link>
      </div>


      <p id="rights">&#169; 2023. All right reserved.</p>


    </footer>

  )
}

export default Footer