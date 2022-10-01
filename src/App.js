import Home from './components/Home.js';
import {Routes, Route} from 'react-router-dom';
import Header from './components/statics/Header';
import Footer from './components/statics/Footer';
import ResendPage from './components/ResendPage.js';

function App() {
  return (
    <div className="App">      
        
        <Header/>

        <Routes>
          <Route path='/' exact={true} element={<Home/>}/>
          <Route path='/ResendPage' exact={true} element={<ResendPage/>}/>
        </Routes>

        <Footer/>
      
    </div>
  );
}

export default App;
