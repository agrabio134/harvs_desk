import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AboutPage from '../../../components/about/about';
import HomePage from '../../../components/home/home';


const MainNav = () => {
    return (  
        <nav className="main-nav">
            <ul>

                <BrowserRouter>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                {/* <li><Link to="/contact">Contact</Link></li> */}
                
                <Routes>
                    {/* route to HomePage */}
                    <Route index element={<HomePage/>} />
                    <Route path="/about" element={<AboutPage/>} />
                    {/* <Route path="/contact" element={<h1>Contact</h1>} /> */}
                </Routes>
                </BrowserRouter>
            </ul>
        </nav>
    );
}
 
export default MainNav;