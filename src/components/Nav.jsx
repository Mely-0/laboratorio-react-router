import React from 'react'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import './nav.css';

export const Nav = () => {
    const[nombre,setNombre]=useState("")
    const onSubmit=(e)=>{
    e.preventDefault()
    setNombre( e.target.user.value);
    e.target.user.value="";
    };
    
    return (
        <div>
        <div className="Nav">
            <Link to="./BillGates">Bill Gates</Link>
            <Link to="./AdaLovelace">AdaLovelace</Link>
            <Link to="./DennisRitchie">DennisRitchie</Link>
            <Link to="./KenThompson">KenThompson</Link>
            <Link to="./LinusTorvalds">LinusTorvalds</Link>
        </div>
            <div className='contenedor-pro'>
            <form className='formula' onSubmit={onSubmit}>
            <input className='nombre' type="text" placeholder='Introduxca su nombre' name='user'  />
            <button className='boton'>Click</button>
            </form>
            <h4 className='texto'>bienvenido {nombre} </h4>
        </div>
    </div>
    );
}
export default Nav;