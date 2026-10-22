import { useState, useEffect, useContext } from 'react'
import { restBase } from '../utilities/Utilities'
import { LoadingContext } from '../context/LoadingContext'
import { decodeHtml } from '../utilities/functions'
import FeaturedImage from '../utilities/FeaturedImage'

function ArtGallery(){
    const restPath = restBase + 'art-work?_embed=1'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)
    const { runWithLoading } = useContext(LoadingContext)

    useEffect(() => {
        const fetchData = async () => {
            await runWithLoading(async () => {
                const response = await fetch(restPath)
                if ( response.ok ) {
                    const data = await response.json()
                    setData(data)
                    setLoadStatus(true)
                } else {
                    setLoadStatus(false)
                }
            })
        }
        fetchData()
    }, [restPath, runWithLoading])

    return(
        <section>
            { isLoaded ?
                <>
                  
                    <h2>Art Works</h2>
                    {restData?(
                        restData.map((art,index)=>(
                            <article key={index} id={`art-${art.id}`}>
                                <FeaturedImage featuredImageObject={art._embedded['wp:featuredmedia'][0]} />
                                <p>{decodeHtml(art.acf.description)}</p>
                            </article>

                        ))
                        
                    ):(
                        //Fallback if rest api failed to load
                        <p>No art works found</p>

                    )}
                    
                </>
                :
                null
            }
        </section>

    )



}


export default ArtGallery