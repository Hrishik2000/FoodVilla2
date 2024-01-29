import { render } from "@testing-library/react"
import { Provider } from "react-redux";
import store from "../../utils/store"
import {StaticRouter} from "react-router-dom/server"
import Header from "../Header";


test("testing the header component -specifically checking logo", ()=>{
    // rendering the header component properly
   const header =  render(<StaticRouter>
                                <Provider store={store}>
                                    <Header/>
                                </Provider>
                            </StaticRouter>);
   //console.log(header); // this will give whole header

   //getting logo into variable
   const logo = header.getAllByTestId("logo") //ensure putting id on element you want to test (data-testId = "logo")
   //console.log(logo[0]);

   //expect to test something
   expect(logo[0].src).toBe("https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"); 

//!writing  code to test isOnline inside same test case or we can write in different new testcase    
   //getting isOnline tag into variable
   const isOnline = header.getAllByTestId("OnlineStatus") //ensure putting id
   console.log(isOnline[0].innerHTML);

    //expect to test something
    expect(isOnline[0].innerHTML).toBe("ONLINE" || "OFFLINE"); 


   
});

// new another testcase to check online status
test("testing the header component -specifically checking online status", ()=>{
    // rendering the header component properly
   const header =  render(<StaticRouter>
                                <Provider store={store}>
                                    <Header/>
                                </Provider>
                            </StaticRouter>);
   //console.log(header); // this will give whole header

  
   //getting isOnline tag into variable
//!                       can get specific element like this getByTestId()
   const isOnline = header.getByTestId("OnlineStatus") //ensure putting id
   console.log(isOnline.innerHTML);

    //expect to test something
    expect(isOnline.innerHTML).toBe("ONLINE" || "OFFLINE"); 


   
});


// new another testcase to check  cart status
test("checking cart of header", ()=>{
   const header =  render(<StaticRouter>
                                <Provider store={store}>
                                    <Header/>
                                </Provider>
                            </StaticRouter>);
   
   const cartTest = header.getByTestId("check-cart")
   console.log(cartTest.innerHTML);

    expect(cartTest.innerHTML).toBe("0");  
});

// Testing JSX compoenent in react

/*
    1. we need to test the header component
        - to do so we first need to render the header compoent into  jest environemnt & we are doing testing in jest environment not in browser environment
        - write test function
            - test("name of the test", call back function()=>{})
            - import render function from testing-library/react & use it to render compoenent which is under testing
            - now jest not understands JSX hence
            - install library - npm i @babel/preset-react & @babel/preset-env (this was already installed & configured when we were testing sum.js file)
            - configure .babelrc with -   "presets": [
                                            ["@babel/preset-env", {"targets": {"node": "current"}}],
                                            ["@babel/preset-react", {"runtime": "automatic" }]    
                                            ]
            - redux is used inside header hence provide access of redux to header
            - import provider and wrap Header into it & inside provider provide store access  
            - import StaticRouter from "react-router-dom/server" & weap the component into the <StaticRouter> component.
            ! (this is required when using local  image (png/jpg/or any other)but in my app i am using a link to logo hence its not required to do in my app)
            - create a mock string(img) & configure jest.configure file to show this when img is need to show(during testing)
                - moduleNameMapper: {
                                     \\. -> means for all jpg & png show this 
                                    "\\.(jpg|png)$" : "./src/mocks/dummyLogo.js" 
                                    },
             - jest has different ways to get element but most prefered is data-
*/