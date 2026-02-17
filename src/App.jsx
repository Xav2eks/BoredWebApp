import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col justify-between h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-xl font-semibold mb-4 sm:text-2xl md:text-3xl lg:text-5xl">
          Welcome to the Bored Web App!
        </h2>
        <form
          method="POST"
          className="flex flex-col gap-8 justify-center items-center"
        >
          <label
            htmlFor="activityType"
            className="block mb-2 text-sm font-medium text-gray-700 sm:text-xl md:text-2xl lg:text-4xl"
          >
            What Activity Are You Interested In?
          </label>
          <div className="flex gap-8">
            <select className="bg-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-lg md:text-xl lg:text-2xl">
              <option value="education">Education</option>
              <option value="charity">Education</option>
              <option value="recrational">Education</option>
              <option value="relaxation">Education</option>
              <option value="busywork">Education</option>
              <option value="social">Education</option>
              <option value="diy">Education</option>
              <option value="music">Education</option>
            </select>
            <select className="bg-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-lg md:text-xl lg:text-2xl">
              <option value="education">Education</option>
              <option value="charity">Education</option>
              <option value="recrational">Education</option>
              <option value="relaxation">Education</option>
              <option value="busywork">Education</option>
              <option value="social">Education</option>
              <option value="diy">Education</option>
              <option value="music">Education</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors sm:text-lg md:text-xl lg:text-2xl"
          >
            Submit
          </button>
        </form>
      </div>
      <footer className="bg-gray-800 text-white text-center p-4 mt-8">
        <p>&copy; 2024 Bored Web App. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;
