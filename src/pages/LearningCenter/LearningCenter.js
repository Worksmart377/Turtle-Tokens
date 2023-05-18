import './LearningCenter.css';
import { Container } from 'react-bootstrap';

export default function LearningCenter(props) {
  return (
    <div>
    <Container>
      <div className='title'>
        <div className='neon-div'>
        <h1 className='neon-sign'>Learning Center</h1>
        </div>
        <h5>
          Check out the video playlist below to learn more about Crypto. These
          videos are meant for beginners and are very comprehensive. I have also
          compiled a list of keywords below that you can use to search youtube,
          tiktok, or your favorite search engine.
        </h5>
      </div>
      </Container>
      <Container>
        <div className='table'>
          <table>
            {/* <col/>
      <col span = '4' />  */}
            <tr>
              <th>Popular Coins</th>
              <th>Key Terms</th>
              <th>Websites</th>
              <th>FAQ</th>
            </tr>
            <tr>
              <td>Bitcoin</td>
              <td>BlockChain</td>
              <td>
                <a href='https://coinmarketcap.com/'>Coin Market Cap</a>
              </td>
              <td>What kind of crypto wallets are there?</td>
            </tr>
            <tr>
              <td>Etherium</td>
              <td>CBDC</td>
              <td>
                <a href='https://cryptobubbles.net/'>Crypto Bubbles</a>
              </td>
              <td>Where to buy cryptocurrency?</td>
            </tr>
            <tr>
              <td>USD Coin</td>
              <td>Decentralized Application</td>
              <td>
                <a href='https://finance.yahoo.com/crypto/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAK08zy5ydXu4MPIfvkyUdwUbn9gwvSWjiO-RM0cYRWxPp-ZK7TCvGw2Dqw5x_ng2oVmCv9bVE-zlSzAqt2eHX6jTQ2bfDzX3jmJUSQgjLGakdH39kBiLSsiEzEGAbA6dqyG7hXRQiIcUUTk48KF3dSlwN6R5wHFEKwIebxNplRRv'>
                  Yahoo Finance Crypto
                </a>
              </td>
              <td>What is distributed ledger technology?</td>
            </tr>
            <tr>
              <td>Cardano</td>
              <td>Smart Contract</td>
              <td>
                <a href='https://thecryptobasic.com/'>Crypto Basic</a>
              </td>
              <td>What are the use cases for cryptocurrency?</td>
            </tr>
            <tr>
              <td>XRP</td>
              <td>Altcoins</td>
              <td>
                <a href='https://crypto.news/'>Crypto News</a>
              </td>
              <td>How many recent commits does a crypto project have? </td>
            </tr>
          </table>
        </div>
      </Container>
      <Container>
        <div class='ratio ratio-4x3'>
          <iframe
            src='https://www.youtube.com/embed/videoseries?list=PLthVfbMi02IO8pU5a9b8qeUBZl7PS_Ty9'
            title='YouTube video'
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </div>
  );
}
