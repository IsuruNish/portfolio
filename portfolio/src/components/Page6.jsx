import React from 'react'
import './Page6.css';


export default function Page6() {
  return (
    <div className='container PageSix' id='page6'>
        <div className='mb-4' data-aos="fade-up" data-aos-duration="800">
            <h1 id='aboutMe' style={{color:'#252A34'}}>Projects</h1>
            <h2 id='Title2' style={{color:'#FF2E63', fontWeight:1000}}>
                <span style={{color:'#FF2E63', fontWeight:1000, fontSize:20}} className="material-symbols-outlined">arrow_back_ios</span>
                    What projects have I done {'/'}
                <span style={{color:'#FF2E63', fontWeight:1000, fontSize:20}} className="material-symbols-outlined">arrow_forward_ios</span>
            </h2>
        </div>

        <div className='row-sm-6 centerME'>

            <div className='col-sm-6 mb-5 mt-4' data-aos="fade-up" data-aos-duration="2000">
                <div className="card cardBoxHeight">
                    <div className="card-body cardBoxes">
                        <h5 className="card-title popupHeader" style={{color:'#000'}}>Royalty Collecting System</h5>
                        <p className="card-text popupContent">A web-based and a mobile-based system that was developed using Java, HTML, CSS, and JavaScript and followed the client-server architecture.</p>
                        <p className="card-title popupSubheader" style={{color:'#000'}}>2nd year group project (2021 – 2022)</p>
                    </div>
                </div>
            </div>

            <div className='col-sm-6 mb-5' data-aos="fade-up" data-aos-duration="2000">
                <div className="card cardBoxHeight" aria-hidden="true">
                    <div className="card-body">
                        <h5 className="card-title popupHeader">Coming Soon!</h5>

                        <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-8"></span>
                        </p>
                    </div>
                    </div>

                {/* <div className="card">
                    <div className="card-body cardBoxes">
                        <h5 className="card-title popupHeader" style={{color:'#000'}}>Royalty Collecting System</h5>
                        <p className="card-text popupContent">A web-based and a mobile-based system that was developed using Java, HTML, CSS, and JavaScript and followed the client-server architecture.</p>
                        <p className="card-title popupSubheader" style={{color:'#000'}}>2nd year group project (2021 – 2022)</p>
                    </div>
                </div> */}
            </div>
        </div>


    </div>
  )
}
