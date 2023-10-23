import Home from './Home';
import Trek_Description from './Trek_Description';
import Experiences from './Experiences';
import './App.css';
import Previous from './Previous';
import Contact from './Contact';
import { Blogs } from './Blogs';
import Nav from './Nav';
// import Blogs from './Blogs';
import Footer from './Footer';
import PrivateComponent from './PrivateComponent';

function RouterApp() {
  return (
    <>
      {/* <div className="nav"><Nav/></div> */}
      
        <div className="home"> <Home /></div>
        <div className="previous mx-10 sm:mx-20 lg:mx-40"><Previous/></div>
        <div className="Experiences  bg-gray-100"><Experiences/></div>
        <div className="Trek_Description mx-20 sm:mx-20 lg:mx-60"><Trek_Description/></div>
        <div className="blogs mx-10 sm:mx-20 lg:mx-40"><Blogs/></div>
        <div className="contact"><Contact/></div>
        <div className="footer"><Footer/></div>
        <h1 className='text-3xl font-bold underline'>This is react app</h1>
     
    </>

  );
}
// mx-20 sm:mx-20 lg:mx-60

export default RouterApp;
