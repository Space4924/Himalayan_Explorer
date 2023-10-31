import React from 'react';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom/dist';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom/dist';
import { ToastContainer ,toast} from 'react-toastify';
import Avatar from '@mui/material/Avatar';

const Menu = () => {

  const Navigate=useNavigate();
  const cloud=localStorage.getItem('user');
  let image=null;
  if(cloud)image=JSON.parse(cloud).data.pic;
  
  const SignOut=()=>{
    alert('SIGNOUT');
    toast("SIGN OUT");
    localStorage.removeItem('user');
    Navigate('/signin');
  }
  useEffect(()=>{
    let clone=localStorage.getItem('user');
    if(clone)Navigate('/');
  },[])
  return<> <div className=" flex justify-center align-center px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
    <Link to='/'
      className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 scale-100 hover:scale-110 ease-out duration-200"
    >
      Home
    </Link>
    <Link
      className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 scale-100 hover:scale-110 ease-out duration-200"
      to ='/feature'
    >
      Features
    </Link>
    {cloud? <>

    <Link 
      className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 scale-100 hover:scale-110 ease-out duration-200"
    >
    <button onClick={()=>SignOut()}>SignOut</button>
    </Link>
      <Link to='/profile'
      className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 scale-100 hover:scale-110 ease-out duration-200"
    >
      <Avatar alt="Remy Sharp" src={image} />
    </Link></>:
    <Link to='/signin'
      className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 scale-100 hover:scale-110 ease-out duration-200"
    >
    SignIn
    </Link>
    }

  </div>
    <ToastContainer  />
    </>
}

export default Menu;