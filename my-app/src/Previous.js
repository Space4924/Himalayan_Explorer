import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Previous = () => {
    return (
        <div><section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 class="sm:w-1/2 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Our Previous Succesfull Track</h1>
                        <p class="sm:w-1/2 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full scale-100 hover:scale-110 ease-in duration-200">
                    <Link to='/gallery'>
                        <div class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="gallery/11.jpg" />
                        </div>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Family Trek</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">ChandraShila</h2>
                            <p class="mt-1">$86.00</p>
                            <Rating/>
                        </div>
                        </Link>
                    </div>
                   
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full scale-100 hover:scale-110 ease-in duration-200">
                    <Link to='/gallery'>
                        <div class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="gallery/12.jpg" />
                        </div>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Family Trek</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">Deoariataal</h2>
                            <p class="mt-1">$90.15</p>
                            <Rating/>
                        </div>
                        </Link>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full scale-100 hover:scale-110 ease-in duration-200">
                    <Link to='/gallery'>
                        <div class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="gallery/13.jpg" />
                        </div>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Youngester Trek</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">Manali Package</h2>
                            <p class="mt-1">$120.00</p>
                            <Rating/>
                        </div>
                    </Link>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full scale-100 hover:scale-110 ease-in duration-200">
                    <Link to='/gallery'>
                        <div class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="gallery/14.jpg" />
                        </div>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Family Trip</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">Kulkarni Trip</h2>
                            <p class="mt-1">$100.00</p>
                            <Rating/>
                        </div>
                        </Link>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full scale-100 hover:scale-110 ease-in duration-200">
                    <Link to='/gallery'>
                        <div class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="gallery/15.jpg" />
                        </div>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Freindship Tour</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">FriendShip Peak</h2>
                            <p class="mt-1">$106.00</p>
                            <Rating/>
                        </div>
                        </Link>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full scale-100 hover:scale-110 ease-in duration-200">
                    <Link to='/gallery'>
                        <div class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="gallery/6.jpg" />
                        </div>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Cloud Future</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                            <p class="mt-1">$210.15</p>
                            <Rating/>
                        </div>
                        </Link>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full scale-100 hover:scale-110 ease-in duration-200">
                    <Link to='/gallery'>
                        <div class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="gallery/5.jpg" />
                        </div>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Youngester Trek</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">Brahmtal Trek</h2>
                            <p class="mt-1">$125.15</p>
                            <Rating/>
                        </div>
                        </Link>
                    </div>

                </div>
            </div>
        </section></div>
    )
}

export default Previous