import React, { useState } from 'react'
import Search from './Search'
import './Banner.css'
import { Button } from "@material-ui/core"


const Banner = () => {
  const [showSearch, setShowSearch] = useState(false)

  const onClick = () => {
    setShowSearch(!showSearch)
  }

  return (
    <div className="banner">
      <div className="banner-search">
        {showSearch && <Search />}


        <Button variant="outlined" onClick={onClick} className="banner-searchBtn">Search Dates</Button>
      </div>
      <div className="banner-info">
        <h1>Get out and stretch your imagination</h1>
        <h5>Plan a different kind of gateway to uncover the hidden gems near you</h5>
        <Button variant='outlined'>Explore Nearby</Button>
      </div>
    </div>
  )
}

export default Banner
