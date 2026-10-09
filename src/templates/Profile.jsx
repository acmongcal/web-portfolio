import { useState, useEffect } from 'react'
import Loading from '../utilities/Loading'
import { restBase } from '../utilities/Utilities'
import ACFImage from '../utilities/ACFImage'
import RelatedProjects from '../utilities/RelatedProjects'

const Profile = () => {
    const restPath = restBase + 'pages/266?_fields=acf&acf_format=standard'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                console.log(data);
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
                <title>Profile | Mindset Headless</title>
                <article id="post-profile">
                    <h1>Profile</h1>
                    <h2>{restData.acf.profile_name}</h2>
                    <div className="entry-content" dangerouslySetInnerHTML={{__html:restData.acf.profile_bio}}>
                    </div>
                    <ACFImage acfImageObject={restData.acf.profile_photo} acfImageSize="large"/>
                    <RelatedProjects ids={restData.acf.related_projects}/>
                </article>
            </>
        : 
            <Loading /> 
        }
        </>            
    )
}

export default Profile
