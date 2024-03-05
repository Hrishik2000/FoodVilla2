//import { useContext } from "react";
//import userContext from "../utils/userContext"
import React from "react";

const Contact = () => {

  //const {user,setDynamicUser} =useContext(userContext);

  {/* <input  className="border border-black bg-slate-400" value={user.name} onChange={(e)=>
      setDynamicUser({
        // It updates the user object by creating a new object with all the existing properties of user (using the spread operator ...user), and then it updates the name property with the new value from the input field (e.target.value).
        ...user,//it creates a shallow copy of main object & retains all property of object untouched & update only "name" property
        name : e.target.value
      })} />

      <input  className="border border-black bg-slate-400" 
      value={user.email} onChange={(e)=>
      setDynamicUser({
        ...user,//if not use this name will disapear when i update email id & vise versa in above case
        email : e.target.value
      })} />       */}

  return (
    <div className="container mx-auto py-8">
    <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
    <div className="max-w-md mx-auto border-4 border-[#e79339] rounded-md p-4">
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 rounded-lg border border-[#e79339]"
            type="text"
            id="name"
            name="name"
            placeholder="Hrishik"
          />
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 rounded-lg border border-[#e79339]"
            type="email"
            id="email"
            name="email"
            placeholder="xyz@gmail.com"
          />
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="contactNo">Contact No</label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 rounded-lg border border-[#e79339]"
            type="tel"
            id="contactNo"
            name="contactNo"
            placeholder="**********"
          />
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="message">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 rounded-lg border border-[#e79339]"
            id="message"
            name="message"
            rows="4"
            placeholder="Query..."
          ></textarea>
        </div>
        
        <div className="flex justify-center">
          <button
            className="bg-[#0A0C0B] text-white font-bold py-2 px-4 rounded hover:bg-gray-900 transition duration-300"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Contact;

