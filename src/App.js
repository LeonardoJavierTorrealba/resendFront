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


// <script src="assets/libs/jquery/jquery.min.js"></script>
// <script src="assets/libs/lozad/lozad.min.js"></script>
// <script src="assets/libs/device/device.js"></script>
// <script src="assets/libs/ScrollToFixed/jquery-scrolltofixed-min.js"></script>
// <script src="assets/libs/spincrement/jquery.spincrement.min.js"></script>
// <script src="assets/libs/jquery-validation-1.19.3/jquery.validate.min.js"></script>
// <script src="assets/js/custom.js"></script>