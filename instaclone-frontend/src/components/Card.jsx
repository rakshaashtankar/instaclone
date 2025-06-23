import React from 'react'
import imgReact from '../assets/react.svg'
const Card = () => {
    return (
        <div class="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/300x200" alt="Product Image" class="w-full object-cover h-48"/>
            <div class="p-4">
                <h5 class="text-lg font-semibold text-gray-900">Apple Watch Series 7</h5>
                <p class="text-sm text-gray-600 mt-1">Aluminium Case, GPS, Sport Edition</p>
            </div>
        </div>

    )
}

export default Card