import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css';

export const Nav = () => {
    return (
        <div className="Nav">
            <Link to="./BillGates">Bill Gates</Link>
            <Link to="./AdaLovelace">AdaLovelace</Link>
            <Link to="./DennisRitchie">DennisRitchie</Link>
            <Link to="./KenThompson">KenThompson</Link>
            <Link to="./LinusTorvalds">LinusTorvalds</Link>
        </div>
    );
}
export default Nav;