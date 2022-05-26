import React from 'react'
import "../styles/Bodyot.css"
import { Cardsot } from './Cardsot'
import imot1 from "../images/cyc.jpg"
import imot2 from "../images/kumba.jpg"
import imot3 from "../images/mochilo.jpg"
import imot4 from "../images/nuez.jpg"
import imot5 from "../images/Quillo.jpg"

const cards = [
    {
        id:"1",
        img: imot1,
        raza: "Mapuche",
        color: "Negro con cafe y Negro con blanco",
        edad: "1 año - 8 meses",
        tamano: "Medianos",
        sexo: "Machos"
    },
    {
        id:"2",
        img: imot2,
        raza: "Californiano",
        color: "Blanco con manchas negras y cafes",
        edad: "2 años",
        tamano: "Grande",
        sexo: "Macho"
    },
    {
        id:"3",
        img: imot3,
        raza: "Jersey Wooly",
        color: "Plomo",
        edad: "1 año",
        tamano: "Mediano",
        sexo: "Macho"
    },
    {
        id:"4",
        img: imot4,
        raza: "Mini rex",
        color: "Blanco con plomo",
        edad: "1/2 año",
        tamano: "Pequeño",
        sexo: "Hembra"
    },
    {
        id:"5",
        img: imot5,
        raza: "Booted Bantman",
        color: "Blanco con manchas cafes",
        edad: "9 meses",
        tamano: "Grande",
        sexo: "Macho"
    }
]

function Bodyot() {
    return (
        <div className='cont-ot'> 
            {
                cards.map(card => (
                    <Cardsot img={card.img} raza={card.raza} color={card.color} edad={card.edad} tamano={card.tamano} sexo={card.sexo} />
                ))
            }
        </div>
    )
}

export {Bodyot}