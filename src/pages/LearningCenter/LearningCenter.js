
import { Container } from 'react-bootstrap';

export default function LearningCenter(props) {
  return(
    <div>

  
    <div>
      <h1>Learning Center</h1>
      <h5>Check out the video playlist below to learn more about Crypto. These videos are meant for beginners and are very comprehensive. I have also compiled a list of keywords below that you can use to search youtube or tiktok.</h5>
    </div>
    <Container>
    <div>
    <table>
        <tr>
        <th>Popular Coins</th>
        <th>Key Terms</th>
        <th>FAQ</th>
        </tr>
        <tr>
          <td>Bitcoin</td>
          <td>Etherium</td>
          <td>USD Coin</td>
          <td>Cardano</td>
          <td>XRP</td>
        </tr>
        <tr>
          <td>BlockChain</td>
          <td>CBDC</td>
          <td>Decentralized Application</td>
          <td>Smart Contract</td>
          <td>Altcoins</td>
        </tr>
        <tr>
          <td>What kind of crypto wallets are there?</td>
          <td>Where to buy cryptocurrency?</td>
          <td>What is distributed ledger technology?</td>
          <td>What are the use cases for cryptocurrency?</td>
          <td>How many recent commits does a crypto project have? </td>
        </tr>
      </table>
    </div>
  </Container>
    <Container>
    <div class="ratio ratio-4x3">
    <iframe src="https://www.youtube.com/embed/videoseries?list=PLthVfbMi02IO8pU5a9b8qeUBZl7PS_Ty9" title="YouTube video" allowFullScreen></iframe>
    </div>
  </Container>
   
  </div>
  )
}
