import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
// import pic4 from "../images/art.svg"
import "./css/Footer.css"
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import HouseIcon from '@mui/icons-material/House';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';


export const Footer = () => {
    return (

        <div className="tempContainer">
            <div className="box">
                <div>
                    <h2>PRICEWISE</h2>
                    <br></br>
                    <span>PriceWise is a popular price prediction platform that helps consumers find the best deals on a wide range of houses.</span>
                    
                </div>
            </div>
            <div className="box">
                <h2>LINKS   </h2>
                <br></br>
                <div className="Links">
                    <a href="">Home</a>
                    <a href="">Predict</a>
                    <a href="">Our Team</a>
                    <a href="">Login/ Sign up</a>
                </div>
            </div>
            <div className="box">
            <h2>    CONTACT   </h2>
            <br></br>
            <div className="contact">
                <p className="sameRow"><HouseIcon/> <span>Bhopal, MP 462003, India</span></p>
                <p className="sameRow"><EmailIcon/> <span>pricewise@info.com</span></p>
                <p className="sameRow"><PhoneEnabledIcon/> <span>+01 234 567 89</span></p>
                {/* <p className="sameRow"><PhoneEnabledIcon/> <span>+01 234 567 89</span></p> */}
            </div>
            </div>
            <div className="box">
            <h2>FOLLOW US   </h2>   
            <br></br>
                <FacebookRoundedIcon/> <TwitterIcon/> <GoogleIcon/> <br></br> <br></br> <InstagramIcon/> <LinkedInIcon /> <GitHubIcon />
            </div>
        </div>
    )
}