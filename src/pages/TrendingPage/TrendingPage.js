import { useState, useEffect } from 'react';
import { checkToken } from '../../utilities/users-service'
import Rocket from '../../imgs/rocket.png';
import './TrendingPage.css';
import { Container } from 'react-bootstrap';



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
            <Container>
            <div className='top'>
            <h1>Currently Trending Crypto</h1>
            <img className='rocket' src={Rocket} alt="shiba-inu wearing rocketpack" />
            </div>
            </Container>
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
             <div className='check-token'>
                <button onClick={handleCheckToken}>Check When My Login Expires</button>
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
           
 