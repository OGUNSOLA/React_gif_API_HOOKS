import React,{useState, useEffect} from 'react'
import '../App.css';
import axios from 'axios';
import { apiKey } from "../Key";

import SearchForm from './SearchForm';
import GifList from './GifList';
import Loading from "./Loading";

function App() {

  // states variables 
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("cats");
  const [isLoading, setIsLoading] = useState(true);

  const performSearch = (value) => setQuery(value);

  useEffect(()=>{
axios(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=${apiKey}`)
.then(res => setData(res.data.data))
.then(setIsLoading(false))
.catch(error => console.log("Error fetching and parsing data", error))
  }, [query]);

  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm performSearch= {performSearch}/>
        </div>
      </div>
      /*        // check if the API is still being called and display the loading information, if noit display result// */
      <div className="main-content">
        {isLoading? <Loading /> : <GifList data={data}/>} 
        
      </div>
    </>
  );
}

export default App

