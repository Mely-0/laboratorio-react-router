import React from 'react'
import "./estilos.css";
import Button from "./Button";

export const KenThompson = () => {
    return (
      <div className="Card">
        <div className="Card2">
          <h1>KenThompson</h1>
          <img
            className="foto"
            src="https://pbs.twimg.com/media/EP9YWozXsAE74Ye.jpg"
          />
          <p>
            Kenneth Lane Thompson, o simplemente Ken, como es llamado por la
            comunidad hacker, es un pionero americano de la informática.
            Thompson diseñó e implementó originalmente el sistema operativo Unix
            y también inventó el lenguaje de programación B (el antecesor
            directo del archifamoso lenguaje de programación C), y fue uno de
            los primeros desarrolladores de los sistemas operativos Plan 9.
            Desde 2006, Thompson también ha co-desarrollado el lenguaje de
            programación Go mientras trabajaba en Google. Otras contribuciones
            de Ken al mundo de la programación han sido sus trabajos sobre las
            expresiones regulares, la creación de algunos editores de texto para
            el desarrollo de aplicaciones, la definición de la codificación
            UTF-8 y la creación de varios sistemas informáticos programados para
            jugar al ajedrez, como Belle.
          </p>
          <Button />
        </div>
      </div>
    );
}
export default KenThompson;