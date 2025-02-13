import React from "react";
import { Row, Col, Container,Button,Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";
import { useState } from "react";
import "./CountryList.css";

const CountryList = ({ visible,currentPage,setCurrentPage,setUsePagination,usePagination }) => {
  const { filteredCountries, countries } = useSelector(
    (state) => state.country
  );

   

  const countriesData =
    filteredCountries.length === 0 ? countries : filteredCountries;


  const itemsPerPage = 8;
 
  const totalPages = Math.ceil(countriesData.length / itemsPerPage) || 0;
  const paginatedData = countriesData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleLoadMore = () => {
    setUsePagination(true); 
  };

 

  return (
    <Container className="mt-4">
      <Row>
        {(usePagination ? paginatedData : countriesData.slice(0, visible)).map(
          (country, index) => (
            <Col md={6} key={index} className="mb-3">
              <Card className="country-card">
                <Card.Body className="d-flex align-items-center">
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="country-flag"
                  />
                  <div>
                    <Card.Title className="country-name">
                      {country.name}
                    </Card.Title>
                    <Card.Text className="country-region">
                      {country.region}
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )
        )}
      </Row>

     
      {!usePagination && (
        <div className="text-center mt-3">
          <Button onClick={handleLoadMore} className="load-more-btn">
            Load More
          </Button>
        </div>
      )}

      
      {usePagination && totalPages > 1 &&  <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}/> }
    </Container>
  );
};

export default CountryList;
