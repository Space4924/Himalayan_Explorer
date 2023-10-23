import React from 'react'
import { useState } from 'react';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import FormData from 'form-data';
// import { Link } from 'react-router-dom';


// import { Link } from 'react-router-dom';
const SignUp = () => {

    const Navigate = useNavigate()
    const [pic, setPic] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [number, setNumber] = useState();


    const SubmitData = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        };
        console.log('submitted');
        const formData = new FormData();
        formData.append("pic", pic);
        formData.append("email", email);
        formData.append('name', name);
        formData.append("password", password);
        formData.append('number', number);
        try {
            const res = await axios.post('https://himalayan-backend.onrender.com/signup', formData, config);
            console.log(res, "this is response");
            if (res.status===200) {
                localStorage.setItem('user', JSON.stringify(res));
                Navigate('/otpverification');
            }else alert('Email Already in USE');
        } catch (e) {
            console.log(e, "hello this is error");
            alert("Error Found");
        }
    }
    return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600 space-y-8">
                <div className="text-center">
                    <img src="/himalayan_logo.png" alt='Logo' width={150} className="mx-auto" />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">SignUp to your account</h3>
                    </div>
                </div>
                <form
                    onSubmit={(e) => SubmitData(e)}
                >
                    <div>
                        <label className="font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                        <label className="font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                        <label className="font-medium">
                            Number
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setNumber(e.target.value)}
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                        <label className="font-medium">
                            Upload Your photo
                        </label>
                        <input
                            type="file"
                            onChange={(e) => setPic(e.target.files[0])}
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                        <label className="font-medium">
                            password
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <button
                        className="w-full mt-4 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="relative">
                    <span className="block w-full h-px bg-gray-300"></span>
                </div>


            </div>
        </main>
    )
}
export default SignUp




