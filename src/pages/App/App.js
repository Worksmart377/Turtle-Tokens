import './App.css';
import {useState} from 'react'
import AuthPage from '../Authpage/AuthPage';
import SearchPage from '../SearchPage/SearchPage';
import TrendingPage from '../TrendingPage/TrendingPage';
import Home from '../Home/Home';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
      { /*Route Components here */}
      <Route path= '/home' element={<Home/>} />
      <Route path= '/search' element={<SearchPage/>} />
      <Route path= '/trending' element={<TrendingPage/>} />
      </Routes>
      </> 
      :
      <AuthPage path='/'setUser={setUser} user={user}/>
      }
      <Footer/>
    </main>
  );
}

