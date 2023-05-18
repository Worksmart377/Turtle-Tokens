import { checkToken } from '../../utilities/users-service';
import Logo from '../../imgs/LogoT.png';
import { BsGraphDownArrow, BsGraphUpArrow } from 'react-icons/bs';
import './Home.css';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';


export default function Home() {
  async function handleCheckToken() {
    const expDate = await checkToken();
  }
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en';
  const [featured, setFeatured] = useState(null);
  const fetchCoins = async () => {
    try {
      const response = await fetch(url);
      const coinData = await response.json();
      setFeatured(coinData);
      console.log(coinData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCoins();
  }, []);
  if (featured) {
    return (
      <>
        <div className='container'>
          <div className='title'>
            <div className='neon-div'>
              <h1 className='neon-sign'>Turtle Tokens Shell</h1>
            </div> 
            <div className='logo-animation-div'>
              <img className='logo' src={Logo} alt='turtle logo' /> 
            </div> 
            </div>         
            

          <div className='graph'>
          <h3 className='primary'>"Swim With The Current"</h3>
          <div className='paragraph-div'>
          <span className='paragraph'>
              Thank you for visiting us! This site was designed as a resource
              for you to learn more about cryptocurrency. We hope you enjoy
              searching, reading, and watching all we have to offer.
            </span>
            </div>
          <iframe src="https://www.coindesk.com/embedded-chart/mLWKtcw6LPmpK" width="550px" height="300px" frameborder="0"></iframe>
          </div>            <h3>Featured Coins</h3>

          <div className='coin-container'>
            {featured.map((coin) => (
              <div className='display-coin silver'>
                {/* <div> */}
                  <img className='coin-image' src={coin.image} alt='' />
                {/* </div> */}
                <div>
                  <h5>{coin.name}</h5>
                  <p>${coin.current_price.toLocaleString()}</p>
                </div>
                {coin.price_change_percentage_24h < 0 ? (
                  <span className='red'>
                    <BsGraphDownArrow />
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                ) : (
                  <span className='green'>
                    <BsGraphUpArrow />
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='check-token'>
          <button onClick={handleCheckToken}>
            Check When My Login Expires
          </button>
        </div>
      </>
    );
  } else {
    return (
      <div className='error-container'>
        <h1>Loading ...</h1>
      </div>
    );
  }
}
