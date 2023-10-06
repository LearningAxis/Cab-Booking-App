import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Mybooking from './pages/Mybooking';
import Faqs from './pages/Faqs';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const Layout =()=>{
  return(
    <>
    <Navbar/>
      <Outlet/>
    <Footer/>
    </>
  );
};

const router =createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/Home",
        element: <Home/>
      },
      {
        path: "/About",
        element: <About/>
      },
      {
        path: "/Blog",
        element: <Blog/>
      },
      {
        path: "/Contact",
        element: <Contact/>
      },
      {
        path: "/FAQs",
        element: <Faqs/>
      },
      {
        path: "/MyBooking",
        element: <Mybooking/>
      },
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <div className='container'>
      <RouterProvider router={router}/>
      </div>
    </div>
  );
}



export default App;
