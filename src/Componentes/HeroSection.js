////Componente HeroSection encargado de contener los elementos de los botones principales del Homepage

import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

/*<h1>Una Gran Aventura Espera por ti</h1>
            <p>¿¡Que esperas para disfrutar de Ella!?</p>
            <div className='hero-btns'>

            <Button
            className='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'>
            ¡Empecemos!
            </Button> */

            function HeroSection() {
                return (
                  <div className='hero-container'>
                    <video src='/videos/video-1.mp4' autoPlay loop muted />
                    <h1>Una Gran Aventura Espera por ti</h1>
                    <p>¿¡Que esperas para disfrutar de Ella!?</p>
                    <div className='hero-btns'>
                      <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                      >
                        ¡Empecemos!
                      </Button>
                      <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        onClick={console.log('hey')}
                      >
                        Contenido Visual de destinos Disponibles <i className='far fa-play-circle' />
                      </Button>
                    </div>
                  </div>
                );
              }
              
              export default HeroSection;