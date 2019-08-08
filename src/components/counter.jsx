import React, { Component } from 'react';

class Counter extends Component {
    // componentDidUpdate(prevProps,prevState){
    //     console.log("prevProps",prevProps);
    //     console.log("prevState",prevState);
    //     if(prevProps.counter.value !== this.props.counter.value){
    //         //Ajax call and get new data from the server

    //     }

    // }

    // componentWillUnmount(){
    //     console.log("Counter - Unmount");
    // }
    // state={
    //     value:this.props.counter.value
    //     //tags:[]
    //     // imageUrl:"https://picsum.photos/150"
    // };
    // renderTags(){
    //     if(this.state.tags.length===0)return <p> There are no tags!</p>
    //     return(
    //     <ul>
    //     {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}    
    //     </ul>)
    // }
    // constructor(){
    //     super();
    //     // console.log("Constructor ",this);
    //     this.handleIncrement=this.handleIncrement.bind(this);

    // }
    // handleIncrement=()=>{

    //     // console.log("Increment Clicked",this)
    //     // console.log(product)
    //     this.setState({value:this.state.value +1 });
    // };
    

    // doHandleIncrement=()=>{
    //     this.handleIncrement({id:1});
    // };
  

    render() {
        // let classes = this.getBadgeClasses();
        console.log('Counter - Rendered');

        return (
        <div>
            {/* {this.props.children} */}
            {/* <img src={this.state.imageUrl} alt=''/>  */}
            <span className={this.getBadgeClasses()}>{this.formatCount()} </span>
            <button onClick={()=>this.props.onIncrement(this.props.counter)} className={"btn btn-secondary btn-sm "}>Increment</button>
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-1"> Delete</button>
       
        { /* {this.state.tags.length===0 && 'please create a new tag'}
        {this.renderTags()} */}
        </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount()
    {
        const {value}=this.props.counter;
        return value===0 ?'zero':value;
         
    }
}
 
export default Counter ;