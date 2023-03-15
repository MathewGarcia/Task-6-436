import Container from "./Container"
import {useState, useEffect} from 'react'
const Footer = () => {

    const [quote, setQuote] = useState('');

    const bookID = sessionStorage.getItem("bookID") || "0";


    const updateFooter = () =>{

        switch(bookID){
            case "1001": setQuote(" \“No amount of fire or freshness can challenge what a man will store up in his ghostly heart.\” ");
            break;
            case "1002": setQuote(" \“Who controls the past controls the future...\”  ");
            break;
            case "1003":  setQuote("\“There is always something left to love.\”")
            break;
            case "1004": setQuote("\“The one thing that doesn't abide by majority rule is a person's conscience.\”");
            break;
            case "1005": setQuote("\“I could easily forgive his pride, if he had not mortified mine.\” ");
            break;
            case "1006": setQuote("\“Words can be like X-rays if you use them properly \– they\’ll go through anything. You read and you\’re pierced.\”");
            break;
            case "1007": setQuote("\“The mark of the immature man is that he wants to die nobly for a cause, while the mark of the mature man is that he wants to live humbly for one.\” ");
            break;
            case "1008": setQuote(" \“I'm not a dwarf!...\” ");
            break;
            case "1009": setQuote(" \“No animal shall drink alcohol.\” ");
            break;
            case "1010": setQuote("\“Time is an illusion...\”");
            break;
            default: setQuote("2023 all rights reserved");
            }
    }

    useEffect(() => {
        updateFooter();
    },[quote])

    return <Container className = "bg-gray-300">
        {quote}
    </Container>
}
export default Footer;