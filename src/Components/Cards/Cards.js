import React from 'react'
import CardItem from '../CardItem/CardItem'
import "./Cards.css";

const Cards = () => {

  return (
    <div className='cards'>
        <h1>Servicios que ofrecemos</h1>
        <div class="cards__container">
            <div class="cards__wrapper">
                <ul class="cards__items">
                    <CardItem 
                    src="images/espejo_magico-foto-1.jpg"
                    text="¡Sacate fotos divertidas que se imprimen en el momento en una plantilla personalizada para que te las lleves!"
                    label="Espejo Magico"
                    path="/servicios/espejo_magico"
                    />
                    <CardItem 
                    src="images/plataforma_360-foto-1.jpg"
                    text="¡Deja que el brazo mecanico gire y te grabe para luego crear un video con musica, slowmotion y boomerang!"
                    label="Plataforma 360°"
                    path="/servicios/plataforma_360"
                    />
                    <CardItem 
                    src="images/shimmer_wall-foto-1.jpg"
                    text="¡Que detras tuyo y en todas tus fotos haya de fondo una pared de brillos! ¡Con el mensaje &quot;Let's party!&quot;"
                    // text="¡Pared de fondo con brillos!"
                    label="Shimmer Wall"
                    path="/servicios/shimmer_wall"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
