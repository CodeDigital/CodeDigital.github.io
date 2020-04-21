import React from 'react';
import codeArrowIcon from '../assets/img/codeArrowIcon.png';

function checkAnniversary(){
    let today = new Date();
    
    //Dec 24, 2017
    if (today.getDate === 27 && today.getMonth === 12){
        return "anniversary"
    }else{
        return ""
        // return "anniversary"
    }
}

const Header = () =>
    <div className="header">
    <a href="/"><img alt="N/A" src={codeArrowIcon}></img></a>
    <h1 className={checkAnniversary()}>&lt;Code&gt;Digital</h1>
    </div>

export default Header;