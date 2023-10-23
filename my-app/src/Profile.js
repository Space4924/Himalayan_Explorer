import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import personalBlogs from './PersonalBlogs'?
// import Per from './PersonalBlogs'
import VerifiedIcon from '@mui/icons-material/Verified';
import { PersonalBlogs } from './PersonalBlogs'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import ClearIcon from '@mui/icons-material/Clear'

const Profile = () => {
  let verification=localStorage.getItem('verification');
  let verified=JSON.parse(verification);
  // let verified=1;
  // let verified=0;
  const [name, setName] = useState("");
  // const [college,setCollege]=useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState();
  const [number, setNumber] = useState("");


  let data = localStorage.getItem('user');
  let image=JSON.parse(data).data.pic;


  const Cloud = () => {
    // console.log(data,"this si data");
    setName(JSON.parse(data).data.name);
    setEmail(JSON.parse(data).data.email);
    setPic(JSON.parse(data).data.pic);
    setNumber(JSON.parse(data).data.number);

    // (JSON.parse(data).data.number);
  }
// const UpdatePhoto=()=>{

// }

  useEffect(() => {
    Cloud();
  }, [])
  return (<>
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">FULL NAME</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{name}</h1>
            <p className="leading-relaxed mb-4">It's your outlook on life that counts. If you take yourself lightly and don't take yourself too seriously, pretty soon you can
              find the humor in our everyday lives. And sometimes it can be a lifesaver." - Betty White austin listicle pour-over, neutra jean.</p>
            <p >"Positive anything is better than negative nothing." - Elbert Hubbard</p>

            <div className="flex mt-8 border-b border-gray-200 py-2">
              <span className="text-gray-500">E-mail</span>
              <span className="ml-auto text-gray-900">{email}</span>
            </div>
            <div className="flex border-b border-gray-200 py-2">
              <span className="text-gray-500">Nationality</span>
              <span className="ml-auto text-gray-900">Indian</span>
            </div>
            <div className="flex border-b  border-gray-200 py-2">
              <span className="text-gray-500">Number</span>
              <span className="ml-auto text-gray-900">{number}</span>
            </div>

            <div className="flex border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Verified Status</span>
              {
                verified?<span className="ml-auto text-gray-900"><VerifiedIcon/></span>:
                <Link to='/otpverification' className="ml-auto text-black-900 bg-red-200 hover:bg-red-500 hover:text-white rounded-lg px-2 py-1">Not Verified</Link>
              }
            </div>
          </div>
          <div className="relative image lg:w-1/2 w-full lg:h-auto  h-64 object-cover object-center rounded">
            <img alt="pic" src={pic} class=" lg:w-full w-full lg:h-auto  h-64 object-cover object-center rounded" />
            <button
              // onClick={()=>UpdatePhoto()}
              type="button"
              class="absolute top-0 right-0 hover:bg-red-900 rounded-lg  hover:text-white text-black    outline-none px-2 py-1"
            >
              <DriveFolderUploadIcon size="large"  />
            </button>

          </div>
        </div>
      </div>
    </section >
    <PersonalBlogs />
  </>
  )
}

export default Profile