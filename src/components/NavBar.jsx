import React, { useState } from "react";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterByRegion } from "../redux/CountrySlice";
import "./NavBar.css";
import { SlOptionsVertical } from "react-icons/sl";

const NavBar = ({ resetPagination }) => {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();

  function handleFilter(region) {
    dispatch(filterByRegion(region));
    setActive(region);
    resetPagination();
  }

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm p-3">
      <Container>
        <Navbar.Brand href="#" className="fw-bold">
          Countries
        </Navbar.Brand>

        {/* Visible on larger screens */}
        <Nav className="ms-auto d-none d-md-flex">
          {["All", "Asia", "Europe"].map((region) => (
            <button
              key={region}
              type="button"
              onClick={() => handleFilter(region)}
              className={`btn btn-light nav-button ${active === region ? "active-btn" : ""}`}
            >
              {region}
            </button>
          ))}
        </Nav>

        {/* Dropdown for mobile screens */}
        <Dropdown className="ms-auto d-md-none dropdown-toggle ">
          <Dropdown.Toggle variant="light" id="region-dropdown">
            <SlOptionsVertical/>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {["All", "Asia", "Europe"].map((region) => (
              <Dropdown.Item key={region} onClick={() => handleFilter(region)}>
                {region}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default NavBar;
