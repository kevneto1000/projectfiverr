import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from ".././src/components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = React.lazy(() => import("./pages/Home"))
const Freelance = React.lazy(() => import("./pages/Freelance"))
const Notfound = React.lazy(() => import("./pages/Notfound"))
const Faq = React.lazy(() => import("./pages/Faq"))
const Post = React.lazy(() => import("./pages/Post"))

function App() {

  useEffect(() => {
     
    AOS.init({
      
      offset: 200, 
      delay: 0,
      duration: 1000, 
      easing: 'ease',
      once: false,
      mirror: false, 
    });
  }, []);

  return (
    <React.Suspense fallback={<div style={{position:"absolute", top:"50%", left:"43%"}}>
    <h5><img className='loading_img' src={("./../freelance_logo-removebg-preview (1).png")} alt="" /></h5>
  </div>}>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freelance" element={<Freelance />} />
          <Route path="/post" element={<Post />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </React.Suspense>

  )
}

export default App