import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import { checkToken } from '../../utilities/users-service'


export default function Home() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate)
  }
    return (
      <div>
        <NavBar/>
        <h1>Turtle Tokens Shell</h1>
        <button onClick={handleCheckToken}>Check When My Login Expires</button>
        <Footer/>
      </div>
    )
  }