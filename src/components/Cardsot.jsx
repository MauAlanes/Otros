import React from 'react'
import "../styles/Cardsot.css"

function Cardsot({img, raza, color, edad, tamano, sexo}) {
    return (
        <div className='cards-ot'>
            <div className='imagenes-ot'>
                <img src={img} alt="Imagen mascota" />
            </div>
            <div className='informacion-ot'>
                <span>Raza:     {raza} </span>
                <span>Color:    {color} </span>
                <span>Edad:     {edad} </span>
                <span>Tamaño:   {tamano} </span>
                <span>Sexo:     {sexo} </span>
            </div>
        </div>
    )
}

export {Cardsot}