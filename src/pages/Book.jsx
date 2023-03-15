import Container from '../components/Container';
import {useParams} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ErrorAlert from './ErrorAlert';
import { useState, useEffect } from 'react';



const Book = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [book, setBook] = useState();


    const params = useParams();
    sessionStorage.setItem("bookID", params.id);

    function changeColor(){ 
        switch(params.id){
        case "1002": document.body.style.background = "red"; 
        break;
        case "1003":  document.body.style.background = "tan";
        break;
        case "1005": document.body.style.background = "tan";
        break;
        case "1009": document.body.style.background = "pink";
        break;
        case "1010": document.body.style.background = "green";
        break;

        default: document.body.style.background = "gray"; 
        }
    }


    const getData = async () => {
        const url = `https://api.matgargano.com/api/books/${params.id}`
        setLoading(true);
        setError(false);
        try{
            const request = await fetch(url);
            const response = await request.json();
            setBook(response);
        }
        catch(e) {
            setError(e.message);
        }
        finally{
            setLoading(false);
        }
    }

    const imgURL = book?.imageURL;

    useEffect(() => {
        getData();
        changeColor();
    },[params.id])

    return <> 
        {error && <ErrorAlert/> && <p>{error}</p>}
        {!error && loading && <div className=''><img  style={{ display: 'block', margin: 'auto' }} src= "https://media.tenor.com/H8bwNGoiurcAAAAM/the-brooke-of-knoledge-flipping-pages.gif" alt = ""/> <p style={{textAlign:'center'}}>Checking Library...</p></div>}
        {!error && !loading && 
        <Container>
            <a href = "/books"> Go back to books</a>
            <img  style={{ display: 'block', margin: 'auto' }}  src={imgURL} alt="" />
            <h2 style={{textAlign:'center'}}>{book?.title}</h2>
            <p style={{textAlign:'center'}} >{book?.author}</p>

     <p style={{textAlign:'center'}}><small> Published: {book?.year}</small></p>
    <p style={{textAlign:'center'}}> <small>page count: {book?.pages}</small></p>

        </Container>}
    </>

}
export default Book;