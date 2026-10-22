import { useState, useEffect, useContext } from 'react'
import { restBase } from '../utilities/Utilities'
import { LoadingContext } from '../context/LoadingContext'

function PageAbout(){
    const restPath = restBase + 'pages/8'
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
    
    return (
        <>
        { isLoaded ?
            <>
                <title>{`${restData.title.rendered} | Mindset Headless`}</title>
                <article id={`post-${restData.id}`}>
                    <h1>{restData.title.rendered}</h1>
                    <div className="entry-content" dangerouslySetInnerHTML={{__html:restData.content.rendered}}>
                    </div>
                </article>
            </>
        :
            null
        }
        </>            
    )
}

export default PageAbout
