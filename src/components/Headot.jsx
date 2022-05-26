import React from 'react'
import "../styles/Headot.css"
import { Menuno } from './Menuno'
import { Menudos } from './Menudos'
import { Menutres } from './Menutres'

function Headot() {
    return (
        <div className='contenedor'>
            <ul>
                <Menuno/>
                <Menudos/>
                <Menutres/>
            </ul>
        </div>
    )
}

export {Headot}