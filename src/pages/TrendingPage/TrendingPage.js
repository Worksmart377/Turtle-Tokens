import { useState, useEffect } from 'react';
import { checkToken } from '../../utilities/users-service'
import ErrorGif from '../../imgs/Error.gif';
import './TrendingPage.css';


export default function TrendingPage(props) {
    const url ="https://api.coingecko.com/api/v3/search/trending"
    const [trending, setTrending] = useState(null);
    const fetchCoins = async () => {
        try {
            const response = await fetch(url);
            const coinData = await response.json();
            setTrending(coinData.coins)
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
            <h1>Currently Trending Crypto</h1>

            {trending.map((coin) => (
                
                <div className="trend-container">
                <div className='top'>
                </div>
                <div className='display-box'>
                    <ul>
                        <li>{coin.item.name}</li>
                        <li>{coin.item.symbol}</li>
                        <li>{coin.item.market_cap_rank}</li>
                        <li><img src={coin.item.large} alt="" />Image</li>
                    </ul>                       
                </div>  
                </div>            
             ))}
            </>
        )
    }else {
        return (
    <>
    <h1>Loading ...</h1>
    <img src={ErrorGif} alt="swimming turtle" />
    </>
    ) }
    
    
} 
           
 