import { Link } from "react-router-dom"
import axios from 'axios';
import { useState, useEffect } from "react";
import ClearIcon from '@mui/icons-material/Clear';


export const Blogs = () => {
    const [item, setItem] = useState();
    const Cloud = async () => {
        console.log("useEffect called");
        try {
            const response = await axios.get('http://localhost:5000/showblogs');
            setItem(response);
        } catch (err) { console.log(err) }
    }

    const DeleteData=async(id)=>{
        // console.log(ID,"This is Id");
        alert('Want to date the product from list');
        try{
            const response=await axios.delete(`http://localhost:5000/deleteblog/${id}`);
            if(response.status===200)console.log("Deleted");
            else console.error("Failed to delete resource");
        }catch(err){console.log("ApI request Failed:",err)}
    }
    useEffect(() => {
        Cloud();
    }, []);
    return (
        <section className="py-8">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div class="container px-5 py-2 mx-auto flex items-center md:flex-row flex-col">
                    <div className="clone w-1/2">
                        <h1 className="text-gray-800 py-2 text-3xl font-extrabold sm:text-4xl">Latest blog posts</h1>
                        <p className="text-gray-600">Blogs that are loved by the community. Updated every hour.</p>
                    </div>
                    <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                        <Link to='/writeblog'><button className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow sm:mt-0 sm:w-auto">
                            Write Blog HERE</button></Link>
                    </div>
                </div>

                <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        item && item.data && item.data.map(items => (
                            <li className="w-full mx-auto group sm:max-w-sm">
                                <a href={item.href}>
                                    <div class=" relative rounded-lg h-64 overflow-hidden">
                                        <img src={items.image} loading="lazy" alt={items.title} style={{ height: '220px' }} className="w-full rounded-lg scale-100 hover:scale-110 ease-in duration-200 overflow-hidden" />
                                        <button
                                        onClick={()=>DeleteData(items._id)}
                                            type="button"
                                            class="absolute top-0 right-0 hover:bg-red-900 rounded-lg  hover:text-white text-black    outline-none px-2 py-1"
                                        >
                                            <ClearIcon/>
                                        </button>

                                    </div>
                                    <div className="mt-3 space-y-2">
                                        <span className="block text-indigo-600 text-sm">{items.newsArea}</span>
                                        <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                            {items.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{items.des}</p>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section >
    )
}

