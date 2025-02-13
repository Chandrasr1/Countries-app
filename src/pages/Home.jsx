import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCountries } from "../redux/CountrySlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Home.css";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import CountryList from "../components/CountryList";
import Footer from "../components/Footer";

const Home = () => {
  const dispatch = useDispatch();
 
  const [visible, setVisible] = useState(8);
  const [usePagination, setUsePagination] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  function resetPagination() {
    setVisible(8);
    setUsePagination(false);
    setCurrentPage(1);
  }

  return (
    <>
      <NavBar resetPagination={resetPagination} />

      <Slider />

      <CountryList
        setUsePagination={setUsePagination}
        usePagination={usePagination}
        visible={visible}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <Footer />
    </>
  );
};

export default Home;
