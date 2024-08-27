import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Regan from '../components/Regan';

const Home = () => {
  const [showLetter, setShowLetter] = useState(false);
  

  const handleClick = () => {
    setShowLetter(true);
    console.log(showLetter); 
  };
  useEffect(() => {
    setShowLetter(false)

  }, [])

  return (
    <>
      <div className="background2">
        <NavBar setShowLetter={setShowLetter}/>
        {showLetter ? (
          <Regan />
        ) : (
          <>
            <h2 className='titleH2 titillium-web-regular'>
              We've Done It Before. Now We Must Do It Again.
            </h2>
            <p className='letterBlock'>
              This is an explanation of the letter below
            </p>
            <div className='buttonContainer'>
              <button className='reganButton' onClick={handleClick}>
                <img src="./src/assets/reagansignature.png" height="75px" alt="Signature" />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Home;