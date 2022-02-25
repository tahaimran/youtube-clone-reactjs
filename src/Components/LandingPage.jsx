import React from 'react'
import RecommendedVideos from '../Components/RecommendedVideos';
import Sidebar from '../Components/Sidebar'
import '../App.css'
function LandingPage() {
    return (
        <> 
            <div className='app__page'>
                <Sidebar />
                <RecommendedVideos />
            </div>
        </>
    )
}

export default LandingPage