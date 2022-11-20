import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setNews, setGraduate } from "../../Redux/features/News/News";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import NewsItem from '../Items/NewsItem';

export default function News() {
  var news = useSelector(state => state.news.news);
  var graduates = useSelector(state => state.news.graduates);
  var dispatch = useDispatch();
  useEffect(() => {
    axios.get("https://localhost:7049/api/news").then(response => { dispatch(setNews(response.data)); }).catch(error => console.log(error.response));
    axios.get("https://localhost:7049/api/graduate").then(response => dispatch(setGraduate(response.data))).catch(error => console.log(error.response));
  }, []);

  return (
    <section className='news'>
      <div className="container">
        <div className="row">
          <div className="title ">
            <h2 className='text-light'>Bduda Xeberler</h2>
          </div>
        </div>
        {news.map(n => {
          return (
            <NewsItem key={n.id}
            id={n.id}
            imageName={n.imageNames[0]}
            title={n.title}
            content={n.content}/>
          )
        })}
      </div>
    </section>

  )
}