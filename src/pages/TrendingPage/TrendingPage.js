import { useState, useEffect } from 'react';
import axios from 'axios';
import { checkToken } from '../../utilities/users-service'


export default function TrendingPage(props) {
    const url ="https://api.coingecko.com/api/v3/search/trending"
    const [trending, setTrending] = useState(null);
    useEffect(() =>{
        axios.get(url).then((response => {
            setTrending(response.trending)
        }).catch((error) => {
            console.log(error)
        }))
    }, []);

  async function handleCheckToken() {
    const expDate = await checkToken();
    return (
        <div className="trend-container">
            <div className='top'>
            <h1>Currently Trending Crypto</h1>
            </div>
            <div className='display-box'>
                <ul>
                    <li>Name</li>
                    <li>Symbol</li>
                    <li>Market Cap Rank</li>
                    <li><img src="" alt="" />Image</li>
                </ul>                       
            </div>      
            <div className='display-box'>
                <ul>
                    <li>Name</li>
                    <li>Symbol</li>
                    <li>Market Cap Rank</li>
                    <li><img src="" alt="" />Image</li>
                </ul>                       
            </div>      
            <div className='display-box'>
                <ul>
                    <li>Name</li>
                    <li>Symbol</li>
                    <li>Market Cap Rank</li>
                    <li><img src="" alt="" />Image</li>
                </ul>                       
            </div>      
            <div className='display-box'>
                <ul>
                    <li>Name</li>
                    <li>Symbol</li>
                    <li>Market Cap Rank</li>
                    <li><img src="" alt="" />Image</li>
                </ul>                       
            </div>      
            <div className='display-box'>
                <ul>
                    <li>Name</li>
                    <li>Symbol</li>
                    <li>Market Cap Rank</li>
                    <li><img src="" alt="" />Image</li>
                </ul>                       
            </div>      
            <div className='display-box'>
                <ul>
                    <li>Name</li>
                    <li>Symbol</li>
                    <li>Market Cap Rank</li>
                    <li><img src="" alt="" />Image</li>
                </ul>                       
            </div>      
            <div className='display-box'>
                <ul>
                    <li>Name</li>
                    <li>Symbol</li>
                    <li>Market Cap Rank</li>
                    <li><img src="" alt="" />Image</li>
                </ul>                       
            </div>      
            
        <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </div>
    )
  }
}