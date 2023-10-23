import { Link } from "react-router-dom"
const Footer= () => {
  return (
    <footer class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap md:text-left text-center order-first">
          <div class="lg:w-1/2 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
              <li>
                <Link class="text-gray-400 hover:text-white">First Link</Link>
              </li>
              <li>
                <Link class="text-gray-400 hover:text-white">Second Link</Link>
              </li>
              <li>
                <Link class="text-gray-400 hover:text-white">Third Link</Link>
              </li>
              <li>
                <Link class="text-gray-400 hover:text-white">Fourth Link</Link>
              </li>
            </nav>
          </div>
         
          
          <div class="lg:w-1/2 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">SUBSCRIBE</h2>
            <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label for="footer-field" class="leading-7 text-sm text-gray-400">Placeholder</label>
                <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
            </div>
            <p class="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
              <br class="lg:block hidden" />waistcoat green juice
            </p>
          </div>
        </div>
      </div>

    </footer>
  )
}
export default Footer