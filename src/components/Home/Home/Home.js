import React from "react";
import Footer from "../../Shared/Footer/Footer";
import { Header } from "../Header/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import Doctors from "../OurDoctor/Doctors";

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <Doctors/>
      <Footer />
    </div>
  );
};
