import React from "react";
import NavBar from "../components/NavBar";

const Eez = () => {
  return (
    <>

      <div className="eezBackground">
        <NavBar />
        <h2 className='titleH2 titillium-web-regular'>The Exclusive Economic Zone</h2>
        <p className="letterBlock">
          The Exclusive Economic Zone (EEZ) is a maritime zone that extends up to 200 nautical miles from a country's coastline. Within this area, the coastal nation has special rights regarding the exploration, exploitation, conservation, and management of natural resources, both in the water column and on the seabed. This includes rights over marine resources like fish, oil, gas, and other minerals.

          From an environmental perspective, the EEZ is crucial because it allows nations to regulate and protect marine ecosystems within their designated zones. Coastal nations can enforce laws to prevent overfishing, pollution, and habitat destruction, ensuring sustainable use of the ocean's resources. The EEZs are vital for balancing economic interests with environmental protection, helping to conserve biodiversity and maintain healthy marine environments.</p>
     
          <img className="imgBlock" src='./src/assets/EEZMAP.jpg' alt="EEZ map image" />
       

      </div>





    </>
  )
}

export default Eez;