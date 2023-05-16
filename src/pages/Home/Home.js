import { checkToken } from '../../utilities/users-service'
import Logo from '../../imgs/LogoT.png'
import './Home.css';


export default function Home() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate)
  }
    return (
      <>
        <div className='container'>
          <div className='title'>
            <h1>Turtle Tokens Shell</h1>
            <h3 className='primary'>"Swim With The Current"</h3>
            <p>Thank you for visiting us! This site was designed as a resource for you to learn more about cryptocurrency. We hope you enjoy searching, reading, and watching all we have to offer.</p>
            </div>
            <div className='logo'>
              <img src={Logo} alt="turtle logo" />
          </div>
        </div>
        <div className='check-token'>
        <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </div>
      </>
    )
  }