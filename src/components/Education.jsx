import { useState, useEffect, useContext } from 'react'
import { restBase } from '../utilities/Utilities'
import { formatDate } from '../utilities/functions'
import { decodeHtml } from '../utilities/functions'
import { LoadingContext } from '../context/LoadingContext'

function Education(){
    const restPath = restBase + 'education?_embed=1'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)
    const { runWithLoading } = useContext(LoadingContext);
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
                null
            }
        </section>            
    )
}

export default Education