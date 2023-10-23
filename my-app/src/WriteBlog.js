import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const FormData = require('form-data');
const WriteBlogs = () => {
    const Navigate=useNavigate();
    const [area, setArea] = useState('');
    const [title, setTitle] = useState('');
    const [des, setDes] = useState('');
    const [image, setImage] = useState('')

    let clone=localStorage.getItem('user');
    const userEmail=JSON.parse(clone).data.email;
    const InformationSave = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            };
            const url_data = 'https://himalayan-backend.onrender.com/writeblog'
            let form_Data = new FormData();
            form_Data.append('image', image);
            form_Data.append('newsArea', area);
            form_Data.append('title', title);
            form_Data.append('des', des);
            form_Data.append('userEmail',userEmail);
            const response = await axios.post(url_data, form_Data, config);
            Navigate('/profile');
            // console.log(response);
            
        }
        catch (error) {
            console.log(error)
        }
        
    }
    return (
        <main className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
                    <div className="max-w-lg space-y-3">
                        <h3 className="text-indigo-600 font-semibold">
                            Contact
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Let us know how we can help
                        </p>
                        <p>
                            We’re here to help and answer any question you might have, We look forward to hearing from you! Please fill out the form, or us the contact information bellow .
                        </p>

                    </div>
                    <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
                        <form
                            onSubmit={(e) => InformationSave(e)}
                            className="space-y-5"
                        >
                            <div>
                                <label className="font-medium">
                                    News Area
                                </label>
                                <input
                                    type="text"
                                    onChange={(e) => setArea(e.target.value)}
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    News Title
                                </label>
                                <input
                                    type="text"
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Description about News
                                </label>
                                <textarea 
                                onChange={(e) => setDes(e.target.value)} 
                                required 
                                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"></textarea>
                            </div>
                            <div>
                                <label className="font-medium">
                                    Incident Photo
                                </label>
                                <input
                                    type="file" enctype="multipart/form-data" id="full-name" accept="image/*"
                                    onChange={(e) => setImage(e.target.files[0])}
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <button
                                type="submit" 
                                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default WriteBlogs