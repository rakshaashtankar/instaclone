import React, { useEffect } from 'react'
const Card = ({data}) => {
    useEffect(() => {
        console.log(data);
    })
    
    const { imgPath, imgCaption } = data;
    return (
        
        <div className="max-w-sm bg-white rounded-sm shadow-md overflow-hidden p-4">
            <img src={`http://localhost:8080${imgPath}`} alt={imgCaption} className="w-full object-contain h-48" loading='lazy' />
            <div className="h-[80px] mt-2 p-3">
                <p className="text-sm text-gray-600 mt-1">{imgCaption}</p>
            </div>
        </div>

    )
}

export default Card