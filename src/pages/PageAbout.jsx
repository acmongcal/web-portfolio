import { useState, useEffect, useContext } from 'react'
import { restBase } from '../utilities/Utilities'
import { LoadingContext } from '../context/LoadingContext'
import ArtGallery from '../components/ArtGallery'

function PageAbout(){

    
    return (
    <>
      <h1>My Story</h1>
      <ArtGallery />
    </>       
    )
}

export default PageAbout
