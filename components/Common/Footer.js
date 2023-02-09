import React from "react"
import { Col, Container, Row } from "reactstrap"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="footer">
        <Container fluid={true} className="container-fluid">
          <Row>
            <Col md="6" className="footer-copyright">
              <p className="mb-0">
                Copyright {currentYear} © ASP Canada - All rights reserved.
              </p>
            </Col>
            <Col md="6">
              <p className="float-end mb-0">
                Developed with <i className="fa fa-heart font-danger" /> by{" "}
                <a href="https://github.com/aspcanada" target="_blank">
                  aspcanada
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
