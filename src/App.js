import React from "react";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Cards
        img={item.imageUrl}
        placeholder={item.placeholder}
        gmap={item.googleMapsUrl}
        title={item.title}
        place={item.location}
        startDate={item.startDate}
        endDate={item.endDate}
        desc={item.description}
      />
    );
  });

  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}
