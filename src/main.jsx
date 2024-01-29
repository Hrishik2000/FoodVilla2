import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ErrorPage } from './components/ErrorPage';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Meals from './components/Meals';
import Contact from './components/Contact.jsx';
import Content from './components/Content.jsx';
import RestorantMenue from './components/RestorantMenue.jsx';
import Profile from './components/Profile_class.jsx';
import Cart from './components/Cart.jsx';
//import InstaMart from './components/InstaMart.jsx';

//chunking -> splitting of code into smaller pieces which will load dynamically when user clicks on it
//code splitting
//lazy loading
//dynamic bundeling
//on demand loading
//dynamic import (all are same thing)
//                lazy()given by react --> import() returns a promise--> inside promise give path
const InstaMart = lazy(()=> { return import("../src/components/InstaMart.jsx")})
//! NEVER LAZY LOAD THE COMPONENT INTO  ANOTHER COMPONENT.


//!types of routing
// 1. client side routing (react does this)
// 2. server side routing (normal js does this hence page reloads)

//!based on functions
// 1. Static routing (where we know the route address & it is fixed -> example AboutUs page)
// 2. Dynamic routing (where we don't know the route address exactly --> example Restorants/:id (here id is variable depending on the click of user id will change & that food recipee will be opened))


//creating the Router using createBrouserRouter
const AppRouter = createBrowserRouter([
    { path: "/",
     element: <App/>,
     errorElement:<ErrorPage/>,
     children:[
        { path: '/', element: <Content /> },
        { path: "/aboutUs",
          element: <AboutUs/>,
          children:[
            {
            path: 'profile',
            element: <Profile/>
            }
          ] 
        },
        { path: "/meals", element: <Meals/> },
        { path: "/contact", element: <Contact/> },
        { path: "/restorantMenue/:id", element: <RestorantMenue/> },
        //if we not handel error then only error code will generate hence commenting this
        // { path: "*", element: <ErrorPage/> }
        {
          path: "/instamart" ,
          element : (<Suspense >
                <InstaMart/>
              </Suspense>)
          //element: <InstaMart/>
         
          
        }
        ,{ path: "/cart", element: <Cart/> },
     ]
    }
  ])

  ReactDOM.createRoot(document.getElementById('root')).render(
    // Rendering the router using RouterProvider
    <RouterProvider router={AppRouter}> </RouterProvider>
)