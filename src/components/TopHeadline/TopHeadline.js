import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=93fa7e73598a47c3aec723ae4bb6aeea';
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    },[])
    return (
        <div>
          <h1>Top News: {articles.length}</h1>
          {
              articles.map(article => <News article = {article}></News>)
          } 
        </div>
    );
};

export default TopHeadline;