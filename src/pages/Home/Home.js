import { checkToken } from '../../utilities/users-service'
import Logo from '../../imgs/LogoT.png'
import ErrorGif from '../../imgs/Error.gif';
import { BsGraphDownArrow, BsGraphUpArrow } from 'react-icons/bs';
import './Home.css';
import { useState, useEffect } from 'react';



export default function Home() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    
  }
  const url ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en"
    const [featured, setFeatured] = useState(null);
    const fetchCoins = async () => {
        try {
            const response = await fetch(url);
            const coinData = await response.json();
            setFeatured(coinData)
            console.log(coinData)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchCoins();
    }, []);
    if(featured) {
    return (
      <>
        <div className='container'>
          <div className='title'>
            <h1>Turtle Tokens Shell</h1><span ><img className='logo' src={Logo} alt="turtle logo" /></span>
            <h3 className='primary'>"Swim With The Current"</h3>
            <p>Thank you for visiting us! This site was designed as a resource for you to learn more about cryptocurrency. We hope you enjoy searching, reading, and watching all we have to offer.</p>
            </div>
            
          {featured.map((coin) => (
                    <div className='display-box'>
                    <div>
                      <img src={coin.image} alt="" />                      
                    </div>
                    <div>
                      <h5>{coin.name}</h5>
                      <p>{coin.current_price.toLocaleString()}</p>
                    </div>   
                    {coin.price_change_percentage_24h < 0 ? (
                      <span className='red'>
                        <BsGraphDownArrow />
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </span>
                    ) : (
                      <span className='green'>
                        <BsGraphUpArrow/>
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </span>
                    )}
                    </div>
                    
                        
             ))}
        </div>
        <div className='check-token'>
        <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </div>
      </>
    )} else{
      return (
  <div className='error-container'>
  <h1>Loading ...</h1>
  <img src={ErrorGif} alt="swimming turtle" />
  </div>
  ) }
  }