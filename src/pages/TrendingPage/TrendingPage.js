import { useState, useEffect } from 'react';
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
            <div className='container'>
            <div className='top-sign'>
            <div className='neon-div'>
            <h1 className='neon-sign'>Currently Trending Crypto</h1>
            </div>
            <div>
                <p>The coins displayed are pulled from the most searched list on CoinGecko API. This will update every 24 hours. This list is just a starting point for you to be able to do some research on the what's trending right now. </p>
            </div>
            
            </div>
            <div className='animated-img'>
                <img className='rocket' src={Rocket} alt="shiba-inu wearing rocketpack" />
                </div>
            <div className="trend-container">
                
            {trending.map((coin) => (
                    <div className='display-box silver'>
                        <ul>
                            <li>Name: {coin.item.name}</li>
                            <li>Tick Symbol: "{coin.item.symbol}"</li>
                            <li>Market Cap Rank: {coin.item.market_cap_rank}</li>
                            <li ><img className='coins' src={coin.item.large} alt="" /></li>
                        </ul>                       
                    </div>   
                        
             ))}
             </div>
             </div>
             <div className='check-token'>
                <button className='btn' onClick={handleCheckToken}>Check When My Login Expires</button>
            </div>
            </>
            )
    }else {
        return (
    <div className='error-container'>
    <h1>Loading ...</h1>
    </div>
    ) }
    
    
} 
           
 