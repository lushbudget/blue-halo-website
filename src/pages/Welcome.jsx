import React from 'react';
import { Link } from 'react-router-dom'
const Welcome = () => {
  return (
    <div className="background">
      <Link className="no-underline" to='/home'>
        <h1 className="titillium-web-regular no-underline">ENTER THE BLUE HALO</h1>
      </Link>

    </div>

  )
}

export default Welcome;