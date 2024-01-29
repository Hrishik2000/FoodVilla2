import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  // Defined state for conetext data update
  const [dynamicUser, setDynamicUser] = useState({
    name: "Hrishik Raj Sahu",
    email: "rajDev@gmail.com",
  });

  return (
    // provide store to app using Provider like this
    <Provider store = {store}>
      {/* wrap the component inside .Provider to update conext  from inside components */}
      <userContext.Provider
      // pass data as props
        value={{
          
          user: dynamicUser,
          setDynamicUser :setDynamicUser
        }}
      >
        {/* components from where context data can be updated */}
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </Provider>
  );
}

export default App;
