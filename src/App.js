
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Podcast';
import Landingpage from "./LandingPage";
import Navbar from "./Navbar";
// import Portfolio from './Portfolio';
// import Footer from './Footer';
import Files from './Files';
import Nakato from './Files';
import Valentine from './Files';
import Videos from './Videos';
import Blogs from "./Blogs";
import Blogstwo from "./Blogstwo";

function App() {
  return (
    <Router>

      <div>
        <Navbar/>
       

        <Routes>
          <Route path="/" element={<Landingpage />}/>
          <Route path="/podcast" element={<About/>}/>
           <Route path="/videos" element={<Videos />} />
           {/* <Route path='/portfolio' element={<Portfolio/> }/> */}
        <Route path='/file' element={<Files/>}/>
        <Route path='/nakato' element={<Nakato/>}/>
        <Route path='/val' element={<Valentine/>}/>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/Blogstwo" element={<Blogstwo />} />

        </Routes>
         {/* <Footer/> */}
      </div>

     
    </Router>
  );
}

export default App;

