import './App.css';
import {useState} from 'react'
import AuthPage from '../Authpage/AuthPage';
import LearningCenter from '../LearningCenter/LearningCenter';
import TrendingPage from '../TrendingPage/TrendingPage';
import Home from '../Home/Home';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>

      { /*Route Components here */}
      <Route path= '/' element={<Home /> } key={Home}/>
      <Route path= '/learn' element={<LearningCenter/>} key={LearningCenter} />
      <Route path= '/trending' element={<TrendingPage/>} key={TrendingPage}/>


      </Routes>
      <Footer/>
      </> 
      :
      <AuthPage className='bg' path='/'setUser={setUser} user={user}/>
      }
      
    </main>
  );
}

