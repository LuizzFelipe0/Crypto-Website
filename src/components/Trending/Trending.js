import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Trending = () => {
 
  const params = useParams()

  const [trending, setTrending] = useState({})

  const url = `https://api.coingecko.com/api/v3/search/trending${params.coinId}`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div>
      <h1>Top Trending Coins</h1>
    </div>
  )
}
export default Trending;