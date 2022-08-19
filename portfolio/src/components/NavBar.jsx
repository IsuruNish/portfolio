import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { useState } from 'react'
import logo from '../images/logo.png'

import { HashLink } from 'react-router-hash-link';


export default function NavBar() {

  const [navigation, setNavigation] = useState(false)

  function changeNavBarColor(){

    if (window.scrollY > 40) {
      document.getElementById('linkNav').classList.add('scrollShow');
      document.getElementById('linkNav2').classList.add('scrollShow');
      document.getElementById('linkNav3').classList.add('scrollShow');
      document.getElementById('linkNav4').classList.add('scrollShow');
      document.getElementById('linkNav5').classList.add('scrollShow');
      document.getElementById('linkNav6').classList.add('scrollShow');
      document.getElementById('linkNav7').classList.add('scrollShow');
      setNavigation(true)
    }
    else{
      document.getElementById('linkNav').classList.remove('scrollShow');
      document.getElementById('linkNav2').classList.remove('scrollShow');
      document.getElementById('linkNav3').classList.remove('scrollShow');
      document.getElementById('linkNav4').classList.remove('scrollShow');
      document.getElementById('linkNav5').classList.remove('scrollShow');
      document.getElementById('linkNav6').classList.remove('scrollShow');
      document.getElementById('linkNav7').classList.remove('scrollShow');
      setNavigation(false)
    }
  }

  window.addEventListener('scroll',changeNavBarColor)


  return (
    <nav className={navigation ? 'container navbar navbar-expand-lg navBarPage ativate py-3': 'container navbar navbar-expand-lg navBarPage py-3'} style={{  position: 'fixed',top: 0}}>
    <div className="container">
        <h2 id='logo'>Portfo<span className={navigation ? 'spanHeading ativate': 'spanHeading'}>lio   </span></h2> <img src={logo} style={{width: 40, marginLeft:15}} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="navbar-nav ms-auto text-center">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <HashLink to='#page1' className="nav-link active mx-2" aria-current="page" ><span className='linkTag' id='linkNav'>Home</span></HashLink>
                </li>

                <li className="nav-item">
                  <HashLink to='#page2' className="nav-link active mx-2" aria-current="page" ><span className='linkTag' id='linkNav2'>About</span></HashLink>
                </li>

                <li className="nav-item">
                  <HashLink to='#page3' className="nav-link active mx-2" aria-current="page" ><span className='linkTag' id='linkNav3'>Education</span></HashLink>
                </li>

                <li className="nav-item">
                  <HashLink to='#page4' className="nav-link active mx-2" aria-current="page" ><span className='linkTag' id='linkNav4'>Extra Curricular Activities</span></HashLink>
                </li>

                <li className="nav-item">
                  <HashLink to='#page5' className="nav-link active mx-2" aria-current="page" ><span className='linkTag' id='linkNav5'>Skills</span></HashLink>
                </li>

                <li className="nav-item">
                  <HashLink to='#page6' className="nav-link active mx-2" aria-current="page" ><span className='linkTag' id='linkNav6'>Projects</span></HashLink>
                </li>

                <li className="nav-item">
                  <HashLink to='#page7' className="nav-link active mx-2" aria-current="page" ><span className='linkTag' id='linkNav7'>Conact Details</span></HashLink>
                </li>
              </ul>
            </div>
        </div>
    </div>
</nav>




  )
}

