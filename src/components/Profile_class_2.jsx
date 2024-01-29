import React from "react";
class Profile_class extends React.Component {
   constructor(props){
   super(props);

   console.log("child_2_constructor_called "+ this.props.name);

    //declairation of state variables
    this.state ={
        count: 0,
        count2: 0
    };
   }

   componentDidMount() {
    console.log("child_2_did_mount_called "+ this.props.name);
   }


    //only maindatory method of react functional component
    render() {

        console.log("child_2_render_called "+ this.props.name);

        return(
            <div className="classComponent"> 
                            <h1>Profile_Class_component</h1>
                            {/* use this.props to get any props in class component */}
                            <h2>{this.props.name}</h2>

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
                                }>click</button>
            </div>

        )
    }
}

export default Profile_class;