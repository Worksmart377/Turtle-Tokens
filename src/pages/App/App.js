import './App.css';
import WelcomePage from '../Welcome/WelcomePage';
import LearningCenter from '../LearningCenter/LearningCenter';
import TrendingPage from '../TrendingPage/TrendingPage';
import Home from '../Home/Home';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <main className="App">
      <WelcomePage className='bg' path='/'/>

      <>
      <NavBar />
      <Routes>

      { /*Route Components here */}
      <Route path= '/' element={<Home /> } key={Home}/>
      <Route path= '/learn' element={<LearningCenter/>} key={LearningCenter} />
      <Route path= '/trending' element={<TrendingPage/>} key={TrendingPage}/>


      </Routes>
      <Footer/>
      </> 
      
    </main>
  );
}

