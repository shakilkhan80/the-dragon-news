/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../NewsCart/NewsCart';

const Catagory = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            {id && <h2>The news length: {categoryNews.length}</h2>}
            {
                categoryNews.map(news => <NewsCart
                    key={news._id}
                    news={news}
                >

                </NewsCart>)
            }
        </div>
    );
};

export default Catagory;