import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import * as glamor from "glamor";
import glamorous from "glamorous";
import { slideInRight } from "react-animations";
import "../../css/test.css";

/* TODO: Remove this but use for template for now
const fadeIn = () => {
  const style = glamor.css.keyframes({
    "0%": { opacity: "0" },
    "100%": { opacity: "1" }
  });
  return { animation: `${style} 1s` };
};
*/

const FadeInDiv = glamorous.div({
  animation: `1s ${glamor.css.keyframes(slideInRight)}`
});

const HomePage = () => {
  return (
    <>
      <Nav className="container navbar navbar-expand-lg fixed-top pt-4">
        <div>
          <div className="navbar-brand">
            <img
              src="images/amici_logo-light.png"
              height="40"
              alt="logo-light"
            />
          </div>
        </div>
      </Nav>

      <section className="bg-home test">
        <div className="home-center">
          <div className="home-desc-center">
            <Container>
              <Row className="align-items-center">
                <Col md="6" lg="7">
                  <div className="title-heading text-center">
                    <h1 className="text-white mb-2">
                      <FormattedMessage id="homepage.header.text" />
                    </h1>
                    <div className="pt-5">
                      <a href="#" className="m-3">
                        <img
                          src="images/badge-apple.png"
                          height="50"
                          alt="badge-apple"
                        />
                      </a>
                      <a href="#" className="m-3">
                        <img
                          src="images/badge-gplay.png"
                          height="50"
                          alt="badge-gplay"
                        />
                      </a>
                    </div>
                  </div>
                </Col>
                <Col lg="5" md="6" className="mt-4 pt-2">
                  <FadeInDiv className="home-img text-md-right">
                    <img
                      src="images/phone_preview.png"
                      alt="app-preview"
                      className="img-fluid"
                    />
                  </FadeInDiv>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>

      <footer>
        <Container>
          <Row className="align-items-center">
            <Col>
              <div className="text-sm-left m-2">
                <Link to="#" className="mr-3">
                  <FormattedMessage id="homepage.link.help_center" />
                </Link>
                <Link to="#" className="mr-3">
                  <FormattedMessage id="homepage.link.medias" />
                </Link>
                <Link to="#" className="mr-3">
                  <FormattedMessage id="homepage.link.about_us" />
                </Link>
                <Link to="/login" className="mr-3">
                  <FormattedMessage id="homepage.link.for_business" />
                </Link>
              </div>
            </Col>
            <Col>
              <div className="text-sm-right"></div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default HomePage;
