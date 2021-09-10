import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';
import Loading from "./Loading";

const GifList = props => { 
  
  const results = props.data;
  let gifs; 

  // check if there is a gif returned and render the Gifs, if not render the Nogif page
  if (results.length) {
    gifs = results.map(gif => <Gif url={gif.images.fixed_height.url} key={gif.id} />);    
  } else {
    gifs = <NoGifs />
  }

  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
}

export default GifList;
