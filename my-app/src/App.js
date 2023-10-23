import { Route,Routes } from "react-router-dom";
import RouterApp from "./RouterApp";
import Gallery from "./Gallery";
import Registration from "./Registration";
import WriteBlogs from "./WriteBlog";
import Trek_Leader from "./Trek_Leader";
import SignIn from "./SignIn";
// import SignUp from "./signUp";
// import SignUp from "./SignUp";
import SignUp from "./SignUp";
import Profile from "./Profile";
// import SignUp from "./signUp";
import Nav from "./Nav";
import PrivateComponent from "./PrivateComponent";
import OTPPage from "./Otp";

function App() {
  // const auth=localStorage.getItem('user');
  return (
    <div className="App">
    <Nav/>
      <Routes>
      <Route path="/" element={<RouterApp />}></Route>
       <Route path="/gallery" element={<Gallery />}></Route>
       <Route path="/registration" element={<Registration />}></Route>
       <Route path='/writeblog' element={<WriteBlogs/>}></Route>
       <Route path="/trek_leaders" element={<Trek_Leader />}></Route>
       <Route path='/otpverification' element={<OTPPage/>}></Route>
       <Route element={<PrivateComponent/>} >
       <Route path="/profile" element={<Profile/>}></Route>
       </Route>
       <Route path='/signin' element={<SignIn/>}></Route>
       <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
