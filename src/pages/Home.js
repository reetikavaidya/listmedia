import React, { useState } from "react";
import "../App.css"; // Ensure correct path to Tailwind setup

const products = [
  { name: "Gaming Headset with Mic", price: "24.99", image: "headset.jpg" },
  { name: "Apple Watch Series 1 Sport", price: "299.99", image: "watch.jpg" },
  { name: "Men's Denim Jeans Shorts", price: "18.95", image: "jeans.jpg" },
  { name: "Bluetooth Speaker", price: "49.99", image: "speaker.jpg" },
  { name: "Wireless Mouse", price: "15.99", image: "mouse.jpg" },
  { name: "Mechanical Keyboard", price: "89.99", image: "keyboard.jpg" },
  { name: "HDMI Cable", price: "5.99", image: "hdmi.jpg" },
  { name: "USB-C Hub", price: "25.99", image: "hub.jpg" },
  // Add more products as necessary
];

const productsPerPage = 3; // Number of products to display per page

function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Get the current products to display
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Listmedia</h1>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Sign In
            </button>
            <button className="px-4 py-2 border rounded">Wishlist</button>
            <button className="px-4 py-2 border rounded">My Cart</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto mt-10 flex">
        {/* Sidebar */}
        <aside className="w-1/4 p-4 bg-white shadow-md">
          <h2 className="text-xl font-semibold mb-4">Filter</h2>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Price</label>
            <input type="range" min="0" max="1000" className="w-full" />
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Product Condition</h3>
            <label className="block">
              <input type="checkbox" className="mr-2" /> New
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Used
            </label>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Category</h3>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Digital Printers
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Laptops
            </label>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 w-full rounded">
            Apply Filter
          </button>
        </aside>

        {/* Product Listing */}
        <main className="flex-1 grid grid-cols-3 gap-6 p-4">
          {currentProducts.map((product, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
              <p className="text-blue-600 font-bold mt-2">${product.price}</p>
              <button className="bg-blue-600 text-white mt-4 py-2 w-full rounded">
                Add to Cart
              </button>
            </div>
          ))}
        </main>
      </div>

      {/* Pagination */}
      <div className="mt-8 container mx-auto flex justify-center items-center">
        <button
          className={`px-3 py-2 border rounded mx-1 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          &lt; 
        </button>
        
   
        
        <button
          className={`px-3 py-2 border rounded mx-1 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
           &gt;
        </button>
        <span className="mx-3">
          Page {currentPage} of {totalPages}
        </span>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-10">
        <div className="container mx-auto grid grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-bold">Listmedia</h3>
            <p className="mt-4">Lorem ipsum dolor sit amet...</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-4">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Get In Touch</h3>
            <p className="mt-4">Email: example@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
