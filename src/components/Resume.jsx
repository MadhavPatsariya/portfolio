import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
// import pdf from "../assets/Madhav Resume.pdf";
//import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

//pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.0.279/pdf.worker.min.js'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const onDocumentLoadSuccess = () => {
    console.log("LOAD Success ");
  }
  return (
    <Container fluid>
      <Row className="resume" style={{ marginTop: '5vh' }}>
        <Document file={`${process.env.PUBLIC_URL}/Madhav Resume.pdf`} onLoadSuccess={onDocumentLoadSuccess} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.0 : 0.6} />
        </Document>
      </Row>
      <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            
            href={'/Madhav Resume.pdf'}
            target="_blank"
            style={{ maxWidth: "250px", marginTop: '3rem', backgroundColor: 'linear-gradient(0deg, #74b9ff, #81ecec)'}}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
    </Container>
  );
}
export default Resume;