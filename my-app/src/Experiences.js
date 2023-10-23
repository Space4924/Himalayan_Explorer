import React from 'react'
import { Link } from 'react-router-dom'

const Experiences = () => {
    return (
        <div>
            <section class="text-gray-600 body-font ">
                <div class="container px-5 py-24 mx-auto ">
                    <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 class="w-full text-gray-900 font-medium title-font text-2xl mb-2 ">UpComing Trek Description</h1>
                    </div>
                    <div class="flex flex-wrap  mx-20 sm:mx-20 lg:mx-60 cursor-pointer bg-white-300">
                        <div class="py-8 px-4 lg:w-1/3 ">
                            <div class="h-full flex items-start">
                                <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                    <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                                    <span class="font-medium text-lg text-gray-800 title-font leading-none">24</span>
                                </div>
                                <div class="flex-grow pl-6 scale-100 hover:scale-110 ease-in duration-200"> <Link to='/trek_leaders' className='scale-50 hover:scale-75 ease-in duration-500'>
                                    <h1 class="title-font text-xl font-medium text-gray-900 mb-3 "> MadhuMaheswari Trek</h1>
                                    <p class="leading-relaxed mb-5">Trek Where you can get the full emmense of nature and get a good Glob culture and local Ethics </p>
                                    <div class="inline-flex items-center">
                                        <img alt="blog" src="Trek/omkar.png" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                                        <span class="flex-grow flex flex-col pl-3">
                                            <span class="title-font font-medium text-gray-900">Omkar Nath Tiwari</span>
                                        </span>
                                    </div>
                                </Link>
                                </div>
                            </div>
                        </div>
                        <div class="py-8 px-4 lg:w-1/3">
                            <div class="h-full flex items-start">
                                <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                    <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Aug</span>
                                    <span class="font-medium text-lg text-gray-800 title-font leading-none">16</span>
                                </div>
                                <div class="flex-grow pl-6 scale-100 hover:scale-110 ease-in duration-200">
                                    <Link to='/trek_leaders'>
                                        <h1 class="title-font text-xl font-medium text-gray-900 mb-3">DeoriaTall Trek</h1>
                                        <p class="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        <div class="inline-flex items-center">
                                            <img alt="blog" src="Trek/pic.png" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                                            <span class="flex-grow flex flex-col pl-3">
                                                <span class="title-font font-medium text-gray-900">Bhoopendra Singh</span>
                                            </span>
                                        </div> </Link>
                                </div>
                            </div>
                        </div>
                        <div class="py-8 px-4 lg:w-1/3">
                            <div class="h-full flex items-start">


                                <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                    <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Sep</span>
                                    <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                                </div>
                                <div class="flex-grow pl-6 scale-100 hover:scale-110 ease-in duration-200">
                                    <Link to='/trek_leaders'>
                                        <h1 class="title-font text-xl font-medium text-gray-900 mb-3">ChandraShila Trek</h1>
                                        <p class="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        <div class="inline-flex items-center">
                                            <img alt="blog" src="Trek/jaipal.png" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />

                                            <span class="flex-grow flex flex-col pl-3">
                                                <span class="title-font font-medium text-gray-900">Chawhan Jaipal</span>
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></div>
    )
}

export default Experiences