import React from 'react'
import "./estilos.css";
import Button from './Button';

export const AdaLovelace = () => {
    return (
        <div className="Card">
            <div className="Card2">
            <h1>AdaLovelace</h1>
            <img className="foto" src="https://historia.nationalgeographic.com.es/medio/2020/11/25/ada-lovelace-portrait_b0909676_550x789.jpg"/>
            <p>
            Augusta Ada King, más comúnmente conocida como Ada Lovelace (la cual
            podemos ver en la imagen que encabeza el artículo), fue una
            matemática inglesa y la primera programadora de computadoras del
            mundo. Sobre todo fue conocida por su trabajo sobre la máquina
            calculadora mecánica de uso general de Charles Babbage, la máquina
            analítica. Las notas que creó para el desarrollo de dicha máquina
            analítica incluyen lo que se podría reconocer hoy en día como el
            primer algoritmo creado con el único propósito de ser procesado por
            una máquina, o en otras palabras, el primer programa informático.
            </p>
            <Button/>
            </div>
        </div>
    );
}
export default AdaLovelace;