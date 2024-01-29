import React from "react";
class Profile_class extends React.Component {
   constructor(props){
   super(props);

    console.log("child_1_constructor_called "+ this.props.name);

    //declairation of state variables
    this.state ={
        count: 0,
        count2: 0,
        APIdata: null
    };
   }

    async componentDidMount() {
        // API CALL using .then syntax else we can also use async await

          await fetch("https://api.github.com/users/hrishik2000")
        .then(response =>{
            if(!response.ok)
                throw new Error("response not ok");
            return response.json();
        })
        .then(data=>{
            //Updaring state of API DATA from fetched Data
            this.setState({
                APIdata: data
            });

            console.log(data);
        })
        .catch((error)=>{ console.error("Error during fetch"+error)})

    console.log("child_1_did_mount_called "+ this.props.name);
   }

   //will call when state changes or updates
   //where when data comes through api then state changes & component updaes hence here called
   componentDidUpdate(){
    console.log("componenet did update called ");
   }

    // this will call when we go in any other section of wbpage like HOME & in that case component shound unmount hence it called    
   componentWillUnmount(){
    console.log("componenet will unmount called");
   }


    //only maindatory method of react functional component
    render() {

        console.log("child_1_render_called "+ this.props.name);

        return(
            <div className="classComponent item-center" > 
                            <h1>Profile_Class_component</h1>
                            {/* use this.props to get any props in class component */}
                            <h2>{this.props.name}</h2>
                            <h2>login ID: {this.state.APIdata?.login}</h2>
                            <h3>Name: {this.state.APIdata?.name}</h3>
                            <img className="h-72 w-72 rounded-md mx-auto block" src={this.state.APIdata?.avatar_url} alt="" />

                            <h2>counter value: {this.state.count}</h2>
                            <h2>counter2 incrimental: {this.state.count2}</h2>
                            <button onClick={
                                ()=>{
                                    //! WE DO NOT MUTATE STATE DRIECTLY
                                    // Don't do like this.state = something;



                                    // set State like this by using setState() given by react
                                    this.setState({

                                        //1 step incriment
                                        count:1,
                                        //multiple incrimented counter
                                        count2: this.state.count2 + 1
                                    });
                                }
                                } className="bg-[#0A0C0B] text-[#E4AE74] p-2 rounded-md">click</button>
            </div>

        )
    }
}

export default Profile_class;


//console

//! mounting phase
//? render cycle
// parent-constructor called
// parent-render called
// child_1_constructor_called child 1
// child_1_render_called child 1
// parent-didMount called //child 1 has async function hence it is called before api call
//!Updating phase
//? API CALL
// {login: 'Hrishik2000', id: 107874996, node_id: 'U_kgDOBm4KtA', avatar_url: 'https://avatars.githubusercontent.com/u/107874996?v=4', gravatar_id: '', …}
// child_1_did_mount_called child 1
// child_1_render_called child 1 // redender child component when data comes
// componenet did update called 
//! UnMounting phase
// componenet will unmount called //called when moved to another page