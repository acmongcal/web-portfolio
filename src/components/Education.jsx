import { useState, useEffect } from 'react'
import Loading from '../utilities/Loading'
import { restBase } from '../utilities/Utilities'
import { formatDate } from '../utilities/functions'
import { decodeHtml } from '../utilities/functions'

function Education(){
    const restPath = restBase + 'education?_embed=1'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])
    return (
        <section>
            
            { isLoaded ?
                <>
                    <h2>Education Background</h2>
                    {restData?(
                        restData.map((education,index)=>(
                            <article key={index} id={`education-${education.id}`}>
                                <h3>{decodeHtml(education.title.rendered)}</h3>
                                <p>{formatDate(education.acf.start_date)} - {formatDate(education.acf.end_date)}</p>
                                <p>{education.acf.school} </p>
                            </article>

                        ))
                        
                    ):(
                        //Fallback if rest api failed to load
                        <p>No education found</p>


                    )}
                    
                </>
                : 
                <Loading /> 
            }
        </section>            
    )
}

export default Education