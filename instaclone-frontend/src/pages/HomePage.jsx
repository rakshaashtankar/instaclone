import React from 'react'
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Header from '../components/Header'
import { PlusIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const[posts, setPosts] = useState([]);
    useEffect (() => {
        const fetchAllPost =  async() => {
            const response = await fetch('http://localhost:8080/api/instaclone');
            const data = await response.json(); // ✅ Wait for JSON to resolve
            console.log(data);
            setPosts(data);
        };
        fetchAllPost();
    },[]);

    const navigate = useNavigate();

    return (
        <div>
            <Header/>
            <div className='w-full flex justify-end p-5'>
                <button className="relative p-2 rounded-full bg-gradient-to-r from-amber-500 to-pink-500 shadow-md" onClick={() => navigate("/add")}>
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-pink-500 opacity-75 animate-ping"></span>
                    <PlusIcon className="relative h-5 w-5 text-white" />
                </button>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
                {posts.map((post, index) => {
                    return <Card key={index} data={post} />
                })}
            </div>


        </div>
    )
}
export default HomePage