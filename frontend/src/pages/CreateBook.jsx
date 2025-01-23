import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import BackButton from '../components/BackButton/BackButton';
import Spiner from '../components/Spiner/Spiner';

const CreateBook = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSaveBook = () => {

        const book = {
            title,
            author,
            publishYear
        };

        setLoading(true);
        axios
            .post(`http://localhost:5555/books/`, book)
            .then((res) => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }

    return (
        <div className='p-4'>
            <BackButton></BackButton>
            <h1 className="text-3xl">Create book</h1>
            {
                loading ? <Spiner></Spiner>: ''
            }
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
                <div className="my-4">
                    <label
                        htmlFor="title" 
                        className="text-xl mr-4 text-gray-500">
                            Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <div className="my-4">
                    <label
                        htmlFor="author" 
                        className="text-xl mr-4 text-gray-500">
                            Author
                    </label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        onChange={(e) => setAuthor(e.target.value)}
                        value={author}
                        className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <div className="my-4">
                    <label
                        htmlFor="publishYear" 
                        className="text-xl mr-4 text-gray-500">
                            Publish Year
                    </label>
                    <input
                        type="number"
                        name="publishYear"
                        id="publishYear"
                        onChange={(e) => setPublishYear(e.target.value)}
                        value={publishYear}
                        className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
                    Save
                </button>
            </div>
        </div>
    )
};

export default CreateBook;