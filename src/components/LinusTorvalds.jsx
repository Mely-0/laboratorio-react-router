import React from 'react'
import "./estilos.css";
import Button from "./Button";

export const LinusTorvalds = () => {
    return (
      <div className="Card">
        <div className="Card2">
          <h1>LinusTorvalds</h1>
          <img
            className="foto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg/800px-LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg"
          />
          <p>
            Linus Benedict Torvalds es un ingeniero de software
            finlandés-estadounidense, que fue el motor principal detrás del
            desarrollo del kernel de Linux. Actualmente es el coordinador del
            proyecto Linux y defensor acérrimo del software libre. A él se le
            atribuye también el diseño del controlador de versiones Git, que tan
            de moda está en estos días y en el que, la mayoría de programadores,
            gestionan sus proyectos. Linus fue honrado con el Premio de
            Tecnología del Milenio 2012 por la Academia de Tecnología de
            Finlandia debido a la creación de un nuevo sistema operativo de
            código abierto para las computadoras que implementan su kernel. Como
            curiosidad, la revista Time lo nombró como uno de los héroes
            revolucionarios de los últimos 60 años.
          </p>
          <Button />
        </div>
      </div>
    );
}
export default LinusTorvalds;