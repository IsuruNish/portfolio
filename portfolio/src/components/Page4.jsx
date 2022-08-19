import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import uniIcon  from '../images/uni.png';
import dipIcon  from '../images/dip.png';
import schoolIcon  from '../images/school.svg';
import schoolAward  from '../images/schooltime.jpeg';
import achi  from '../images/achi.jpg';
import aiesecLogo  from '../images/aiesecLogo.png';

import prefect1  from '../images/prefect1.jpg';
import science  from '../images/science.jpg';
import aiesec  from '../images/aiesec.jpg';
import tri  from '../images/trisvg.svg';
import rect  from '../images/rect.png';
import dio  from '../images/dio.png';

import { Avatar } from '@mui/material';
import 'reactjs-popup/dist/index.css';
import './Page4.css'


let education = [
    {
        key: '1',
        title: 'Senior Prefect',
        location: "Prefects' Guild of Ananda College",
        date: '2016 – 2018',
    },

    {
        key: '2',
        title: 'Co-ordinator',
        location: 'Science Union of Ananda College',
        date: '2017 – 2018',
    },

    {
        key: '3',
        title: 'Local Committee Vice President - Outgoing Global Talent',
        location: 'AIESEC in University of Colombo',
        date: '2022 – present',
    }
]

export default function Page4() {
  return (
    <div className='container PageFour' id='page4'>
        <div className='mb-4' data-aos="fade-up" data-aos-duration="800">
            <h1 id='aboutMe'>Extra Curricular Activities </h1>
            <h2 id='Title2' style={{color:'#FF2E63', fontWeight:1000}}>
                <span style={{color:'#FF2E63', fontWeight:1000, fontSize:20}} className="material-symbols-outlined">arrow_back_ios</span>
                    What did I do {'/'}
                <span style={{color:'#FF2E63', fontWeight:1000, fontSize:20}} className="material-symbols-outlined">arrow_forward_ios</span>
            </h2>
        </div>


        <VerticalTimeline
            lineColor={ '#08D9D6' }
            >
                
            <VerticalTimelineElement
            key={education[0].id}
            className={ 'componentTimeline' }
            contentStyle={{ background: '#00ADB5' }}
            contentArrowStyle={{ borderRight: '7px solid  #00ADB5' }}
            date={education[0].date}
            dateClassName={ "dateStyle" }
            iconStyle={{ background: '#00ADB5', color: '#fff' }}
            // icon={<Avatar src={tri} sx={{ width: '70%', height: '70%',margin:'auto', marginTop:0.9}} />}
            >

                    <div className='row md-12'>
                        <div className="card cardPopUP">
                            <img src={prefect1} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title popupHeader">{education[0].title+ " at "+ education[0].location}</h5>
                                <p className="card-text popupContent">It was a privilege and a one of a kind experience being an Assistant prefect, a Junior prefect and finally a Senior prefect at Ananada College. Being a prefect while doing my A/Ls was the toughest challenge I have ever faced in my life. Battle of the Maroons, Parade of the Legends,Colours Night and Clubs Night are some of the events that are organized by the Prefects' guild of Ananda College.</p>
                            </div>
                        </div>
                    </div>

            </VerticalTimelineElement>

   


            <VerticalTimelineElement
            key={education[1].id}
            contentStyle={{ background: '#00ADB5', color: '#00ADB5' }}
            contentArrowStyle={{ borderRight: '7px solid  #00ADB5' }}
            date={education[1].date}
            dateClassName={ "dateStyle" }
            position='right'

            iconStyle={{ background: '#00ADB5', color: '#fff' }}
            // icon={<Avatar src={rect}  sx={{ width: '70%', height: '70%',margin:'auto', marginTop:0.9}} />}
            >
                    <div className='row md-12'>
                        <div className="card cardPopUP">
                            <img src={science} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title popupHeader">{education[1].title+ " at "+ education[1].location}</h5>
                                <p className="card-text popupContent">It was a honor to be selected as a member of the Executive Board at the Science Union of Ananda College. Scientia and Intellect was two of the events that we have organized during our term.</p>
                            </div>
                        </div>
                    </div>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
            key={education[2].id}
            contentStyle={{ background: '#00ADB5', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #00ADB5' }}
            position='left'
            date={education[2].date}
            dateClassName={ "dateStyle" }
            iconStyle={{ background: '#00ADB5', color: '#fff' }}
            // icon={<Avatar src={dio}  sx={{ padding:1.7, width: '105%', height: '100%',margin:'auto', marginTop:0.3}}/>}
            >
                <div className='row md-12'>
                        <div className="card cardPopUP">
                            <img src={aiesec} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title popupHeader">{education[2].title+ " at "+ education[2].location}</h5>
                                <p className="card-text popupContent">It was a great privilege to be selected as a member of the Executive Board at AIESEC in University of Colombo. This is the place where I met a lot of people around the country and also around the world. RevolvUX, Insight,International, Career Fair, Hey Amigo and LDS are some of the events that we have organized during the term.</p>
                            </div>
                        </div>
                    </div>

            </VerticalTimelineElement>

            <VerticalTimelineElement
            contentStyle={{ background: '#FF2E63', color: '#FF2E63' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF2E63' }}
            date={'Achievements'}
            dateClassName={ "dateStyle" }
            position='left'
            iconStyle={{ background: '#FF2E63', color: '#fff' }}
            icon={<Avatar src={achi}  sx={{padding:1, width: '80%', height: '80%',margin:'auto', marginTop:1}} />}>
                    <div className='row md-12'>
                        <div className="card cardPopUP">
                            {/* <img src={schoolAward} className="card-img-top"/> */}
                            <div className="card-body">
                                <h5 className="card-title popupHeader">Emerging oGTer in Excellentia'21</h5>
                                <p className="card-text popupContent">The Annual awarding ceremony in AIESEC in University of Colombo.</p>
                                <h6 className='popupSubHeader'>Jul 2021</h6>
                            </div>
                        </div>
                    </div>

                    <div className='row md-12'>
                        <div className="card cardPopUP mt-3">
                            {/* <img src={ieee14} className="card-img-top"/> */}
                            <div className="card-body">
                                <h5 className="card-title popupHeader">Best oGTer award in Excellentia'22</h5>
                                <p className="card-text popupContent">The Annual awarding ceremony in AIESEC in University of Colombo.</p>
                                <h6 className='popupSubHeader'>Jan 2022</h6>
                            </div>
                        </div>
                    </div>
            </VerticalTimelineElement>

           

        </VerticalTimeline>
        
    </div>
  )
}
