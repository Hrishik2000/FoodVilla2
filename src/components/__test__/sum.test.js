import sum from "../sum"
test("sum function testing", ()=>{
         expect(sum(2,6)).toBe(8)
         expect(sum(2,4)).toBe(6)
});

// Steps to setup testing environment

/*
    1. intall react testing library
        - npm install --save-dev @testing-library/react

    2. install jest
        - npm i -D jest

    3. configure jest
        - create config file or use command
        - npx jest --init
        - setconfig as below
            1. Would you like to use Typescript for the configuration file? NO
            2. Select -  jsdom (browser-like)
            3. Do you want Jest to add coverage reports? YES
            4. Select -  babel
            5. Automatically clear mock calls, instances, contexts and results before every test? YES
            Now file gets created MSG-> Configuration file created at jest.config.mjs

    4. add  script in package .json
            "scripts": {
             "test": "jest"
            }

    5. try rnning test
        - npm test
        - got error -> validation error
        - fix it by -> npm i -D jest-environment-jsdom

    6. now again try running test
        - got error -> can't find __test__ folder
        - create it __test__
        - create file into it (naming convention)
        - file_to_be_tested.test.js (sum.test.js)
    
    7.  SYNTAX FOR TEST ANY COMPONENT
        import sum from "../sum"
        test("sum function testing", ()=>{
        expect(sum(2,6)).toBe(8)

    8. import keyword is not recognized by jest (as during testing our code is running in jest environment not in browser environment)
        - install bable-jest (taking help of bable by configuring bable)
        - command -> npm install --save-dev babel-jest @babel/core @babel/preset-env

    9. configure bable 2 ways  1. babel.config.js file or 2. .babelrc file
        - inside file
            {// put all in  "" because babelrc require JSON inside it 
            "presets": [["@babel/preset-env", {"targets": {"node": "current"}}]]
            }

    10. start testing...
            - npm test

    Note-
            -put coverage report in git ignore

    
    


*/