import React from "react";
import Navbar from "../components/navbar";
import Header from "./../components/header";
import NewsList from "./../components/news/newsList";
import WorkshopList from "./../components/workshops/workshopList";
import WhatTheFuzz from "../components/WhatThefuzz";
import Steps from "../components/steps";
import FAQ from "../components/FAQ/index";
import WhoAreWe from "../components/whoAreWe";
import Footer from "../components/Footer";

const Landing = () => {

  fetch('https://main.summerschoollanding-7tt.pages.dev/data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })

  return (
    <div>
      <Navbar />
      <Header />
      <div
        style={{
          zIndex: -1,
          backgroundImage: `url(${process.env.PUBLIC_URL}background_lines2.png)`,
          backgroundColor: "#0F2E47",
          backgroundSize: "cover",
        }}
      >
        <NewsList />
        <WhatTheFuzz />
        <Steps />
        <WorkshopList />
        <FAQ />
        <WhoAreWe />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
