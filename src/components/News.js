import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export default function News(props) {

    const [allnews, setallnews] = useState([]);
    const [spinner, setSpinner] = useState(true);
    // const [page, setPage] = useState(1);

    const fetchData = async () => {
        // let url = `https://newsapi.org/v2/everything?q=tesla&from=2023-02-04&sortBy=publishedAt&apiKey=e43c6f6d1842429bad02bfc518517902&pageSize=8&page=1`

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=e43c6f6d1842429bad02bfc518517902`

        await fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.articles) {
                    setallnews(data.articles)
                    setSpinner(false);
                }else{
                    setSpinner(true);
                }
                
            })
    }

    useEffect(() => {
        fetchData();
    });

    const show = allnews.map((element) => {
        return <div className='col-md-3 my-3' key={element.url}>
            <NewsItem title={element.title} desc={element.description} urlToImage={element.urlToImage} url={element.url} />
        </div>
    });

    // const previusPageData = () => {
    //     setSpinner(false)
    //     setPage(page - 1)
    //     fetchData()
    // }
    // const nextPageData = () => {
    //     setSpinner(false)
    //     setPage(page + 1)
    //     fetchData()
    // }

    return (
        <>
            <div className='container'>
                <h2 className='my-2 text-center'>Welcomw to NewsApp</h2>
                <div className='row'>
                    {show}
                </div>
                {spinner && <Spinner />}
                {/* <div className='btn btn-warning m-4' onClick={previusPageData}>Previus</div>
                <div className='btn btn-success m-4' onClick={nextPageData}>next</div> */}
            </div>

        </>
    );
}
