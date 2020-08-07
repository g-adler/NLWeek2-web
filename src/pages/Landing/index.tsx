import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'

import logoimg from '../../assets/images/logo.svg'
import landingimg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css';
import api from '../../services/api';


function Landing(){
    const [totalConnections, setTotalConnections] = useState(0)    
    useEffect( () => {
        api.get('connections').then(response =>{
            const total = response.data.total            
            setTotalConnections(total)
        })
    } , [] )
    return(
     <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={logoimg} alt="Proffy"/>
                <h2>Sua plataforma de estudos online</h2>
            </div>

            <img
             src={landingimg}
             alt="Plataforma de estudo" 
             className="hero-image"
             />

             <div className="buttons-container">
                <Link to="/study" className="study">
                 <img src={studyIcon} alt="Estudar"/>
                 Estudar
                </Link>

                <Link to="/give-classes" className="give-classes">
                 <img src={giveClassesIcon} alt="Dar Aulas"/>
                 Dar Aulas
                </Link>
             </div>
             <span className="total-connections">
              Total de {totalConnections} conexões ja realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
             </span>
        </div>
     </div>   
    )
}
export default Landing;