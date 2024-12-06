import React from 'react'
import './About.scss'
import video from '../../asserts/video.mp4'
import { Data3 } from '../Home/Data';

function Abvideo() {
    return (
        <div className='Abvideo'>
            <video autoPlay loop muted >
                <source src={video} alt='' type='video/mp4' />
            </video>

            <div className='description'>
                {
                    Data3.map((item)=>{
                        return(
                            <div className='description-conent'>
                                <p>{item.Description}</p>
                            </div>
                        )
                    })
                }                
            </div>
        </div>
    )
}

export default Abvideo