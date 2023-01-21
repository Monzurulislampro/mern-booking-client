import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./Home.css";
import PropertyList from "../../components/propertyList/PropertyList";
import FeatureProperties from "../../components/featureProperties/FeatureProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className="homeContainer">
        <Featured></Featured>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList></PropertyList>
        <h1 className="hometitle">Browse by property type</h1>
        <FeatureProperties></FeatureProperties>
        <MailList></MailList>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
