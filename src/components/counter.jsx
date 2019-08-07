import React, { Component } from 'react';
class Counter extends Component {
    state={
        count:0,
        tags:[]
        // imageUrl:"https://picsum.photos/150"
    }
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
    handleIncrement=()=>
    {
        // console.log("Increment Clicked",this)
        this.setState({count:this.state.count +1 })
    }

  

    render() {
        // let classes = this.getBadgeClasses();

        return (
        <div>
            <img src={this.state.imageUrl} alt=''/> 
            <span className={this.getBadgeClasses()}>{this.formatCount()} </span>
            <button onClick={this.handleIncrement} className={"btn btn-secondary btn-sm m-1"}>+</button>
            <button className="btn btn-secondary btn-sm m-1">-</button>
       
       { /* {this.state.tags.length===0 && 'please create a new tag'}
        {this.renderTags()} */}
        </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount()
    {
        const {count}=this.state;
        return count===0 ?'zero':count;
         
    }
}
 
export default Counter ;