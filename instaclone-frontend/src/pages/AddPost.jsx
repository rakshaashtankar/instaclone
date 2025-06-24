import React, { useState } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

const AddPost = () => {
    const navigate = useNavigate();
    const[imageFile, setImageFile] = useState(null);
    const[caption, setCaption] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!imageFile || !caption) {
            alert("Please fill in both fields.");
            return;
        }
        const formData = new FormData();
        formData.append('file', imageFile);
        formData.append('caption', caption);

        try {
            const response = await fetch('http://localhost:8080/api/instaclone/upload', {method: 'POST', body: formData,});
            if(response.ok) {
                alert('Post uploaded!');
                navigate('/');
            } else {
                alert('Upload failed.');
            }
        } catch (err) {
            console.error("Error uploading post: ", err);
            alert("Server error!");
        }
    };

    return (
        <div>
            <Header/>
            <div className='w-full flex justify-end p-5'>
                <button className="p-2 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text" onClick={() => navigate("/")}>
                    Home
                </button>
            </div>
            <div className="max-w-md mx-auto p-6 bg-white shadow rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Add a New Post</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* File Input */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Upload Image</label>
                        <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImageFile(e.target.files[0])}
                        className="w-full border rounded p-2"
                        required
                        />
                    </div>

                    {/* Caption Input */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Caption</label>
                        <textarea
                        rows={3}
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        className="w-full border rounded p-2"
                        placeholder="Write a caption..."
                        required
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-amber-500 to-pink-500 text-white py-2 px-4 rounded hover:opacity-90"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddPost