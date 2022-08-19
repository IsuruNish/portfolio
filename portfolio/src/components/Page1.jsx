import React from 'react'
import './Page1.css'
import { useTypewriter } from 'react-simple-typewriter'
import { HashLink } from 'react-router-hash-link';

import arrow from '../images/arrow.png'


export default function Page1() {

  const { text } = useTypewriter({
    words :[' Computer Science UG', ' Tech Enthusiast', ' Web Developer'],
    loop: 0,
  })



  function showUPbtn(){

    if (window.scrollY > 650) {
      document.getElementById('showUPbtn').classList.add('show');
    }
    else{
      document.getElementById('showUPbtn').classList.remove('show');
    }
  }

  window.addEventListener('scroll',showUPbtn)

  return (
    <div className='container' id='page1'>

      <div className='scroolUPBtn' id='showUPbtn'>
        <HashLink to='#page1'><img src={arrow} style={{height: 30}}/></HashLink>
      </div>

      <div className='row'>
            <div className='col-lg-6'>
                  <div style={{maxWidth:600, textAlign:'left'}} id='typeWritterText'>
                        <h3 id='h3Tag'>Hello, I'm</h3>
                        <h1 id='h1Tag'>
                          <span id='textLetter1'>I</span>
                          <span id='textLetter2'>s</span>
                          <span id='textLetter3'>u</span>
                          <span id='textLetter4'>r</span>
                          <span id='textLetter5'>u</span>
                          <span> </span>
                          <span id='textLetter6'>N</span>
                          <span id='textLetter7'>i</span>
                          <span id='textLetter8'>s</span>
                          <span id='textLetter9'>h</span>
                          <span id='textLetter10'>a</span>
                          <span id='textLetter11'>d</span>
                          <span id='textLetter12'>h</span>
                          <span id='textLetter13'>a</span>
                          
                          </h1>
                        <h3 id='h3Tag'>And I'm a 
                          <span style={{color:'#FF2E63', fontWeight: 750}}>{text}</span>
                        </h3>
    
                        <HashLink to='#page7' ><button id='btn' >Contact Me</button></HashLink>
                  </div>
            </div>

            <div className='col-lg-6 centerME'>
                  {/* <img className='imageME img-fluid' src={photoOfMe}></img> */}
            </div>
      </div>






    </div>
  )
}
