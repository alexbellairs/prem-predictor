import "../CSS/pages.css";
import afcb from "../images/AFC_Bournemouth.png";
import afc from "../images/Arsenal.png";
import avfc from "../images/Aston_Villa.png";
import bfc from "../images/brentford.png";
import bha from "../images/Brighton.png";
import cfc from "../images/Chelsea.png";
import cpfc from "../images/Crystal_Palace.png";
import efc from "../images/Everton.png";
import ffc from "../images/Fulham.png";
import lufc from "../images/Leeds.png";
import lcfc from "../images/Leicester.png";
import lfc from "../images/Liverpool.png";
import mcfc from "../images/MCFC.png";
import mufc from "../images/MUFC.png";
import nufc from "../images/Newcastle.png";
import nffc from "../images/Nottingham.png";
import sfc from "../images/Southampton.png";
import thfc from "../images/Tottenham.png";
import whufc from "../images/West_Ham.png";
import wwfc from "../images/Wolves.png";

const Bennett = () => {
  return (
    <div className="leag">
      <h3>Mike Bennett Predicted Table</h3>
      <ol className="tab">
        <li>
          <img src={mcfc} alt="MCFC" />
          Manchester City
        </li>
        <li>
          <img src={lfc} alt="LFC" />
          Liverpool
        </li>
        <li>
          <img src={thfc} alt="THFC" />
          Tottenham Hotspurs
        </li>
        <li>
          <img src={cfc} alt="CFC" />
          Chelsea
        </li>
        <li>
          <img src={afc} alt="AFC" />
          Arsenal
        </li>
        <li>
          <img src={whufc} alt="WHUFC" />
          West Ham United
        </li>
        <li>
          <img src={mufc} alt="MUFC" />
          Manchester United
        </li>
        <li>
          <img src={nufc} alt="NUFC" />
          Newcastle United
        </li>
        <li>
          <img src={bfc} alt="BFC" />
          Brentford
        </li>
        <li>
          <img src={avfc} alt="AVFC" />
          Aston Villa
        </li>
        <li>
          <img src={lcfc} alt="LCFC" />
          Leicester City
        </li>
        <li>
          <img src={sfc} alt="SFC" />
          Southampton
        </li>
        <li>
          <img src={bha} alt="BHAFC" />
          Brighton & Hove Albion
        </li>
        <li>
          <img src={wwfc} alt="WWFC" />
          Wolverhampton Wanderers
        </li>
        <li>
          <img src={cpfc} alt="CPFC" />
          Crystal Palace
        </li>
        <li>
          <img src={afcb} alt="AFCB" />
          Bournemouth
        </li>
        <li>
          <img src={nffc} alt="NFFC" />
          Nottingham Forrest
        </li>
        <li>
          <img src={ffc} alt="FFC" />
          Fulham
        </li>
        <li>
          <img src={lufc} alt="LUFC" />
          Leeds United
        </li>
        <li>
          <img src={efc} alt="EFC" />
          Everton
        </li>
      </ol>
    </div>
  );
};

export default Bennett;
