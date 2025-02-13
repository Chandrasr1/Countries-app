import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";
import "./Slider.css";

const Slider = () => {
  const { filteredCountries, countries } = useSelector(
    (state) => state.country
  );

  const countriesData =
    filteredCountries.length === 0 ? countries : filteredCountries;

  return (
    <Container className="text-center mt-4">
      <h2 className="fw-bold">WELCOME</h2>
      <Row className="align-items-center">
        <Col md={8}  className="p-3 border rounded carousel-container">
          <Carousel
            className="custom-carousel"
            indicators={true}
            nextIcon={
              <i className="bi bi-chevron-right carousel-control-icon"></i>
            }
            prevIcon={
              <i className="bi bi-chevron-left carousel-control-icon"></i>
            }
          >
            {countriesData.slice(10, 20).map((country) => (
              <Carousel.Item key={country.name}>
                <img
                  src={country.flag}
                  alt={country.name}
                  className="carousel-image"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col>
          <div className="flag-container">
            <img
              src="https://flagcdn.com/in.svg"
              alt="Indian Flag"
              className="indian-flag"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Slider;
