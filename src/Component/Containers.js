import React from "react"
import {Container ,Row, Col} from 'react-bootstrap';
import CardComp from "./Cards/cardComp";
import CardComp1 from "./Cards/cardComp1";
import CardComp2 from "./Cards/CardCom2";
import PaperComp from "./Paper/PaperComp";
import SlideCarousel from "./Carousel/slideCarousel";
import PaperSlices from "./Paper/PaperSlices"
export default function Containers(){
        return(
          <>
      <Container fluid>
      <>
      <Container>
        <Row>
          <Col xs={9}>
            {" "}
            <SlideCarousel />
          </Col>
          <Col xs={3}>
            <CardComp />
            <CardComp1/>
          </Col>
        </Row>
        <br/>
        <Row>
          <PaperComp/>
          <PaperSlices/>
        </Row>
        <br/>
        <Row>
          <CardComp2/>
        </Row>
      </Container>
    </>
        </Container>
        </>
        )
    }
