import React from 'react'
import "./estilos.css";
import Button from "./Button";

export const DennisRitchie = () => {
    return (
      <div className="Card">
        <div className="Card2">
          <h1>DennisRitchie</h1>
          <img
            className="foto"
            src="https://upload.wikimedia.org/wikipedia/commons/2/23/Dennis_Ritchie_2011.jpg"
          />
          <p>
            Dennis Ritchie MacAlistair fue un científico informático
            estadounidense a quien se le acredita ser uno de los pioneros de la
            era digital. Él creó uno de los lenguajes de programación más
            utilizados hoy en día, C. Como sabéis, C es ampliamente utilizado en
            diversas aplicaciones de software, desarrollo de sistemas embebidos,
            sistemas operativos, y ha influido en los lenguajes de programación
            más modernos. Dennis también co-creó el sistema operativo UNIX. Por
            su trabajo, en 1983 recibió el Premio Turing de la ACM, la Medalla
            de Hamming en 1990 de la IEEE y en 1999 la Medalla Nacional de
            Tecnología del presidente Clinton. En el año 2007 se jubiló, siendo
            el jefe del departamento de Investigación en software de sistemas de
            Alcatel-Lucent. Falleció el 12 de octubre de 2011, el mismo día que
            se lanzó Fedora 16 al cual dedicaron en su honor.
          </p>
          <Button />
        </div>
      </div>
    );
    }
export default DennisRitchie;