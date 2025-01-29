import React, {useEffect, useState} from 'react';
    import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import { fetchData } from "../feuters/books/booksSlice";

import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle} from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete} from "react-icons/md";

import Spiner from '../components/Spiner/Spiner';

const Home = () => {

    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        
        <div className='p-4 flex flex-col justify-center items-center'>
            <div className="flex justify-between items-center box-title">
                <h1 className="text-3xl my-8">Books list</h1>
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl'></MdOutlineAddBox>
                </Link>
            </div>
            {books.loading && <Spiner></Spiner>}
            {books.data && (
                <table className="w-full border-separate border-spacing-2">
                    <thead>
                        <tr>
                            <th className="border border-slate-600 rounded-md">No</th>
                            <th className="border border-slate-600 rounded-md">Title</th>
                            <th className="border border-slate-600 rounded-md max-md:hidden">Author</th>
                            <th className="border border-slate-600 rounded-md max-md:hidden">Publish year</th>
                            <th className="border border-slate-600 rounded-md">Operations</th>
                       </tr>
                    </thead>
                    <tbody>
                        {
                            books.data.map((book, index) => {
                                return(
                                    <tr key={book._id} className='h-8'>
                                        <td className="border border-slate-700 rounded-md text-center">
                                            {index+1}
                                        </td>
                                        <td className="border border-slate-700 rounded-md text-center">
                                            {book.title}
                                        </td>
                                        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                                            {book.author}
                                        </td>
                                        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                                            {book.publishYear}
                                        </td>
                                        <td className="border border-slate-700 rounded-md text-center">
                                        <div className="flex justify-center gap-x-4">
                                                <Link to={`/books/details/${book._id}`}>
                                                    <BsInfoCircle className='text-2xl text-green-800'></BsInfoCircle>
                                                </Link>
                                                <Link to={`/books/edit/${book._id}`}>
                                                    <AiOutlineEdit className='text-2xl text-yellow-600'></AiOutlineEdit>
                                                </Link>
                                                <Link to={`/books/delete/${book._id}`}>
                                                    <MdOutlineDelete className='text-2xl text-red-600'></MdOutlineDelete>
                                                </Link>
                                        </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            )}
            {books.error && <p>{books.error}</p>}
        </div>
    )
};

export default Home;