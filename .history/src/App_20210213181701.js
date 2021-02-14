import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    
    <div className="App" >
    <div className="w-full max-w-md bg-gray-800" >
      <form action="" className=" bg-white shadow-md rounded px-8 py-8 pt-8">
        <div className="px-4 pb-4">
          <label htmlFor="email" className="text-sm block font-bold  pb-2">EMAIL ADDRESS</label>
          <input type="email" name="email" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="Johnbull@example.com"/>
        </div>
        <div  className="px-4 pb-4">
          <label htmlFor="password" className="text-sm block font-bold pb-2">PASSWORD</label>
          <input type="password" name="email" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Enter your password"/>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Sign In</button>
        </div>
      </form>
    </div>
  </div>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>

        Welcome to coding mentors. Find a coding mentor or become one.
      </p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
  Button
</button>

    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Mentors</h2>
    </div>
  );
}
