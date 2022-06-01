import React from "react";
import { CCard, CCardTitle, CCardText, CRow, CCol, CCardImage, CCardBody } from "@coreui/react";
import Background from "../Components/images/BackgroundImage.png";
import { Link } from "react-router-dom";
import Abouts from "../Components/images/about.png";
import Contacts from "../Components/images/contact.png";
import Local from "../Components/images/local.png";
import Builds from "../Components/images/builder.png";

function Builder() {
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
            <Link to="/locality"><img className="abt" src={Local} alt="contact"></img></Link>
          </div>
        </div>
        <img className="backimg2" src={Background} alt="background"/>
        <div className="res"><Card4 /></div>
        <div className="res2"><Card5 /></div>
        <div className="res3"><Card6 /></div>
        </div>
        <div className="rctngl"></div>
        </header>
    )
}
export default Builder;

function Card4() {
    return(
          <CCard className="mb-3">
    <CRow className="g-0">
      <CCol md={4}>
        <CCardImage className="CC2" src={Builds} />
      </CCol>
      <CCol md={8}>
        <CCardBody>
              <CCardTitle className="cctitle">Builder</CCardTitle>
          <CCardText className="cctext">
            Looking for someone who can work on buildings.
          </CCardText>
          <CCardText className="cctext2">
            9€/hour
          </CCardText>
          <CCardText className="cctext3">
            Phone: 0904454878
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
  
  function Card5() {
    return(
          <CCard className="mb-3">
    <CRow className="g-0">
      <CCol md={4}>
        <CCardImage className="CC2" src={Builds} />
      </CCol>
      <CCol md={8}>
        <CCardBody>
              <CCardTitle className="cctitle">Builders needed</CCardTitle>
          <CCardText className="cctext">
            Join us!.
          </CCardText>
          <CCardText className="cctext2">
            10€/hour
          </CCardText>
          <CCardText className="cctext3">
            Phone: 0903975418
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
  
  function Card6() {
    return(
          <CCard className="mb-3">
    <CRow className="g-0">
      <CCol md={4}>
        <CCardImage className="CC2" src={Builds} />
      </CCol>
      <CCol md={8}>
        <CCardBody>
              <CCardTitle className="cctitle">Building specialties</CCardTitle>
          <CCardText className="cctext">
            Builders hiring
          </CCardText>
          <CCardText className="cctext2">
            11.50€/hour
          </CCardText>
          <CCardText className="cctext3">
            Phone: 0904957214
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