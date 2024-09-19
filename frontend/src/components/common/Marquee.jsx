import React from 'react'
import Marquee from "react-fast-marquee";

const LittleMarquee = ({list,direction}) => {
    return (
        <div className='font-clash font-medium text-lg border-t-2 border-y-2 bg-white dark:bg-black border-dark dark:border-light py-2'>
            <Marquee direction={direction}>
                {
                    list.map((item, index) => (
                        <span key={index} className='flex gap-4 text-dark dark:text-light'>&nbsp;{item.icon}  {item.text}</span>
                    ))
                }
            </Marquee>
        </div>
    )
}

export default LittleMarquee
