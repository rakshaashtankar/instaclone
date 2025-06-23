import './App.css'
import Card from './components/Card';
import Header from './components/Header'
import { PlusIcon } from '@heroicons/react/24/solid';


function App() {
    return (
        <div>
            <Header/>
            <div className='w-full flex justify-end p-5'>
                <button className="relative p-2 rounded-full bg-gradient-to-r from-amber-500 to-pink-500 shadow-md">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-pink-500 opacity-75 animate-ping"></span>
                    <PlusIcon className="relative h-5 w-5 text-white" />
                </button>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>


        </div>
    )
}

export default App
