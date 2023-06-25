import React from 'react';

const App = () => {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-blue-600">
            WikiTensor
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="/app/wiki" className="text-gray-600 hover:text-gray-900">
            Random Article
          </a>
        </div>
      </header>
      <main className="flex-grow p-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center">Welcome to WikiTensor</h1>

          <div className="flex justify-center">
            <img
              src="app/neural.jpg"
              alt="LOGO"
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex">
              <input
                type="text"
                placeholder="Write an Article"
                className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r shadow hover:bg-blue-700">
                Create
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 text-gray-600 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Wikitensor - North Tensor. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
