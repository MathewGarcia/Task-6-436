import Container from '../components/Container';
import { useState, useEffect } from 'react';
import ErrorAlert from './ErrorAlert';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Books = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

  
        const getData = async () => {
            const url = 'https://api.matgargano.com/api/books';
            setLoading(true);
            setError(false);
            try{
                const request = await fetch(url);
                const response = await request.json();
                setBooks(response);
            } catch(e){
                setError(e.message);
            } finally {
                setLoading(false);
            }
        }
        useEffect(() => {
            getData();
    },[])
    return <>
        {error && <ErrorAlert/> && <p>{error}</p>}
        {!error && loading && <div className='max-w-[230px]'><Skeleton count = "10"/></div>}
        {!error && !loading && <>{books.map(book => {
            return <div key = {book.id}><Link className= 'hover:underline' onClick={sessionStorage.setItem("bookID", book.id)} to = {`/books/${book.id}`}>{book.title}</Link></div>
        })}</>}
        </>
    
}
export default Books;