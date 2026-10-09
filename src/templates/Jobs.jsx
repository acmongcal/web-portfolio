import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../utilities/Loading'
import { restBase } from '../utilities/Utilities'

const Jobs = () => {
    const restPath = restBase + 'fwd-job-posting?_embed=1'
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
        <>
        { isLoaded ?
            <>
                <title>Careers | Mindset Headless</title>
                <h1>Careers</h1>
                {restData.map(job => 
                    <article key={job.id} id={`job-${job.id}`}>
                        <Link to={`/careers/${job.slug}`}><h2>{job.title.rendered}</h2></Link>
                    </article>
                )}
            </>
        : 
            <Loading />
        }
        </>
    )
}

export default Jobs
