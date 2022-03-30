import React from "react";
import { CCard, CCardTitle, CCardText, CRow, CCol, CCardImage, CCardBody } from "@coreui/react";
import Background from "../Components/images/BackgroundImage.png";
import { Link } from "react-router-dom";
import Abouts from "../Components/images/about.png";
import Contacts from "../Components/images/contact.png";
import Local from "../Components/images/local.png";
import Salesmen from "../Components/images/Salesman.png"

function Salesman() {
    return(
        <header>
        <div className="container"></div>
          <div className="login">
            <Link to="/login">LOGIN</Link>
          </div>
      <div>
        <div className="rect">
          <div className="about">
            <Link to="/about"><img src={Abouts} alt="about"></img></Link>
          </div>
          <div className="contact">
            <Link to="/contact"><img src={Contacts} alt="contact"></img></Link>
          </div>
          <div className="local">
            <Link to="/locality"><img src={Local} alt="contact"></img></Link>
          </div>
        </div>
        <img className="backimg" src={Background} alt="background"/>
        <div className="centered">JOBSIDE</div>
        <div className="res"><Card4 /></div>
        <div className="res2"><Card5 /></div>
        <div className="res3"><Card6 /></div>
        </div>
        <div className="rctngl"></div>
        </header>
    )
}
export default Salesman;

function Card4() {
    return(
          <CCard className="mb-3">
    <CRow className="g-0">
      <CCol md={4}>
        <CCardImage src={Salesmen} />
      </CCol>
      <CCol md={8}>
        <CCardBody>
              <CCardTitle className="cctitle">Salesman</CCardTitle>
          <CCardText className="cctext">
            Is selling your thing? We need you
          </CCardText>
          <CCardText className="cctext2">
            500€ brutto
          </CCardText>
          <CCardText className="cctext3">
            Phone: 0902987456
          </CCardText>
          <CCardText className="cctext4">
            Country: Slovakia
          </CCardText>
          <CCardText className="text-medium" style={{height: "20px"}}>
            <small>Last updated 8 mins ago</small>
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
        <CCardImage src={Salesmen} />
      </CCol>
      <CCol md={8}>
        <CCardBody>
              <CCardTitle className="cctitle">Salesman</CCardTitle>
          <CCardText className="cctext">
            If you want to sell items come join us.
          </CCardText>
          <CCardText className="cctext2">
            550€ 
          </CCardText>
          <CCardText className="cctext3">
            Phone: 0903654987
          </CCardText>
          <CCardText className="cctext4">
            Country: Czech Republic
          </CCardText>
          <CCardText className="text-medium" style={{height: "20px"}}>
            <small>Last updated 2 hours ago</small>
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
        <CCardImage src={Salesmen} />
      </CCol>
      <CCol md={8}>
        <CCardBody>
              <CCardTitle className="cctitle">Salesman</CCardTitle>
          <CCardText className="cctext">
            Salesman hiring
          </CCardText>
          <CCardText className="cctext2">
            700€ netto
          </CCardText>
          <CCardText className="cctext3">
            Phone: 0904951753
          </CCardText>
          <CCardText className="cctext4">
            Country: Slovakia
          </CCardText>
          <CCardText className="text-medium" style={{height: "20px"}}>
            <small>Last updated 1 day ago</small>
          </CCardText>
        </CCardBody>
      </CCol>
    </CRow>
  </CCard>
    )
  }