import { useState, useEffect } from 'react';
import { checkToken } from '../../utilities/users-service'
import ErrorGif from '../../imgs/Error.gif';
import Rocket from '../../imgs/rocket.png';
import './TrendingPage.css';


export default function TrendingPage(props) {
    const url ="https://api.coingecko.com/api/v3/search/trending"
    const [trending, setTrending] = useState(null);
    const fetchCoins = async () => {
        try {
            const response = await fetch(url);
            const coinData = await response.json();
            setTrending(coinData.coins)
            console.log(coinData.coins)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchCoins();
    }, []);

  async function handleCheckToken() {
    const expDate = await checkToken();
  }
  
    if(trending){
        return (
            <>
            <div className='top'>
            <h1>Currently Trending Crypto</h1>
            <img className='rocket' src={Rocket} alt="shiba-inu wearing rocketpack" />
            </div>
            <div className="trend-container">
            {trending.map((coin) => (
                    <div className='display-box'>
                        <ul>
                            <li>Name: {coin.item.name}</li>
                            <li>Tick Symbol: "{coin.item.symbol}"</li>
                            <li>Market Cap Rank: {coin.item.market_cap_rank}</li>
                            <li className='coins'><img src={coin.item.large} alt="" /></li>
                        </ul>                       
                    </div>       
             ))}
             </div>
            </>
            )
    }else {
        return (
    <div className='error-container'>
    <h1>Loading ...</h1>
    <img src={ErrorGif} alt="swimming turtle" />
    </div>
    ) }
    
    
} 
           
 