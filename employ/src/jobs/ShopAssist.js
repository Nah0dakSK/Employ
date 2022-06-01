import React from "react";
import Background from "../Components/images/BackgroundImage.png";
import { Link } from "react-router-dom";
import { CCard, CCardTitle, CCardText, CRow, CCol, CCardImage, CCardBody } from "@coreui/react";
import Shoppers from "../Components/images/shopAssist.png";
import Abouts from "../Components/images/about.png";
import Contacts from "../Components/images/contact.png";
import Local from "../Components/images/local.png";

function Shopper() {
    return(
        <header>
           <div className="container"></div>
          <div className="login">
            <Link to="/login">LOGIN</Link>
          </div>
      <div>
        <div className="rect">
          <div className="about">
            <Link to="/about"><img className="abt" src={Abouts} alt="about"></img></Link>
          </div>
          <div className="contact">
            <Link to="/contact"><img className="abt" src={Contacts} alt="contact"></img></Link>
          </div>
          <div className="local">
            <Link to="/locality"><img className="abt" src={Local} alt="local"></img></Link>
          </div>
        </div>
        <img className="backimg2" src={Background} alt="background"/>
          <div className="res"><Card1 /></div>
          <div className="res2"><Card2 /></div>
          <div className="res3"><Card3 /></div>
        </div>
        <div className="rctngl"></div>
        </header>
    )
}
export default Shopper;

function Card1() {
  return(
        <CCard className="mb-3">
  <CRow className="g-0">
    <CCol md={4} >
      <CCardImage className="CC1" src={Shoppers} alt="Shopper"/>
    </CCol>
    <CCol md={8}>
      <CCardBody>
            <CCardTitle className="cctitle">Shop Assistance</CCardTitle>
        <CCardText className="cctext">
          Looking for someone who would like to work in minishop.
        </CCardText>
        <CCardText className="cctext2">
          5€/hour
        </CCardText>
        <CCardText className="cctext3">
          Phone: 0902547878
        </CCardText>
        <CCardText className="cctext4">
          Country: Slovakia
        </CCardText>
        <CCardText className="text-medium">
          <small>Last updated 5 mins ago</small>
        </CCardText>
      </CCardBody>
    </CCol>
  </CRow>
</CCard>
  )
}

function Card2() {
  return(
        <CCard className="mb-3">
  <CRow className="g-0">
    <CCol md={4}>
      <CCardImage className="CC1" src={Shoppers} />
    </CCol>
    <CCol md={8}>
      <CCardBody>
            <CCardTitle className="cctitle">Shop Assistant</CCardTitle>
        <CCardText className="cctext">
          If you want to work in a shop join us.
        </CCardText>
        <CCardText className="cctext2">
          4€/hour
        </CCardText>
        <CCardText className="cctext3">
          Phone: 0903587411
        </CCardText>
        <CCardText className="cctext4">
          Country: Czech Republic
        </CCardText>
        <CCardText className="text-medium">
          <small>Last updated 30 mins ago</small>
        </CCardText>
      </CCardBody>
    </CCol>
  </CRow>
</CCard>
  )
}

function Card3() {
  return(
        <CCard className="mb-3">
  <CRow className="g-0">
    <CCol md={4}>
      <CCardImage className="CC1" src={Shoppers} />
    </CCol>
    <CCol md={8}>
      <CCardBody>
            <CCardTitle className="cctitle">Assistant in Shop</CCardTitle>
        <CCardText className="cctext">
          Shop Assistents hiring
        </CCardText>
        <CCardText className="cctext2">
          4.50€/hour
        </CCardText>
        <CCardText className="cctext3">
          Phone: 0904875123
        </CCardText>
        <CCardText className="cctext4">
          Country: Slovakia
        </CCardText>
        <CCardText className="text-medium">
          <small>Last updated 1 hour ago</small>
        </CCardText>
      </CCardBody>
    </CCol>
  </CRow>
</CCard>
  )
}