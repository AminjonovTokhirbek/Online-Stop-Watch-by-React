
// import Header from "./Header"

// const App = ()=>{
//     return (
//         <div>
//             <Header />
//         </div>
//     )
// }
 
// export default App;

// import React, {component} from "react";

// class App extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             Name: "Tokhirbek",
//             Color: "red",
//             Boyi: "172"
//         };
//     }
     
//      change=()=> {
//          this.setState({
//             Name: "Elyorbek",
//             Color: "yellow",
//             Boyi: "134"
//          })

//      }

//     render(){
//         return (
//             <div>
//                 <h3>Name:{this.state.Name}</h3>
//                 <h3>Color:{this.state.Color} </h3>
//                 <h3>Boyi: {this.state.Boyi}</h3>
//                 <button onClick={this.change}>Change Information</button>
//             </div>
//         )
//     }
    
// }

// export default App;

 
//    Counter created by Tokhirbek

// import React, {component} from "react";


// class App extends React.Component {
//     constructor(props){
//         super(props);
//         this.state ={
//             count:0,
//         };
//     }

//     AddNumber =() =>{
//         this.setState({
//             count: this.state.count +1,
//         })
//     }


//     render() {
//         return (
//             <div> 
//                 <h1>Counter: {this.state.count}</h1>
//                 <button onClick={this.AddNumber}>Add 1</button>
//             </div>
//         )
//     }
// }

// export default App;

// import React, {component} from "react"

// class App extends React.Component{
//     state ={
//         count: 0,
//     };

//     Addone = () =>{
//         this.setState ({
//             count: this.state.count + 1,
//         });
//     }
//     Deletone = () =>{
//         this.setState ({
//             count: this.state.count - 1,
//         });
//     }
//     Reset = () =>{
//         this.setState ({
//             count: 0,
//         });
//     }


//     render(){
//         return(
//             <div>
//                <div className="container">
//                    <div className="row">
//                        <div className="col">
//                            <div className="card">
//                                <div className="card-header">
//                                  <h2>Perfect Counter 😍</h2>
//                                </div>
//                                <div className="card-body">
//                                    <h4 className="text-center"> Counter: {this.state.count}</h4>
//                                </div>
//                                <div className="card-footer p-4">
//                                    <button className="btn btn-success m-2" onClick={this.Addone}>Add</button>
//                                    <button className="btn btn-danger m-2 "  onClick={this.Deletone}>delate</button>
//                                    <button className="btn btn-dark m-2" onClick={this.Reset}>Reset</button>
//                                </div>
//                            </div>
//                        </div>
//                    </div>
//                </div>
//             </div>
//         )
//     }
// } export default App;

    // Counterni yangicha usuli


// import React, {component} from "react"

// class App extends React.Component{
//     state ={
//         count: 0,
//     };

//     Adddeleteresetone = (value) =>{
//         this.setState ({
//             count: value,
//         });
//     }
    


//     render(){
//         return(
//             <div>
//                <div className="container">
//                    <div className="row">
//                        <div className="col">
//                            <div className="card">
//                                <div className="card-header">
//                                  <h2>Perfect Counter 😍</h2>
//                                </div>
//                                <div className="card-body">
//                                    <h4 className="text-center"> Counter: {this.state.count}</h4>
//                                </div>
//                                <div className="card-footer p-4">
//                                    <button className="btn btn-success m-2" onClick={() => this.Adddeleteresetone(this.state.count +1)}>Add</button>
//                                    <button className="btn btn-danger m-2 "  onClick={() => this.Adddeleteresetone(this.state.count -1)}>delate</button>
//                                    <button className="btn btn-dark m-2" onClick={() => this.Adddeleteresetone(0)}>Reset</button>
//                                </div>
//                            </div>
//                        </div>
//                    </div>
//                </div>
//             </div>
//         )
//     }
// }

// export default App;

// Online stopwatch


import React, {Component} from "react";

class App extends React.Component{

     state ={
         second: 0,
         minut: 0,
         hour: 0,
         btnDisable: false,
         interval: "",
         intervalStores: [],
     };


     startClicked = () =>{
         this.setState({
            btnDisable: true,
         })
         let timer = setInterval( () =>{
             const{second, minut, hour}=this.state;
             if(second ===59){
                 if(minut===59){
                     this.setState({
                         second: 0,
                         minut: 0,
                         hour: hour +1,
                     });
                 }else{
                    this.setState({
                        second: 0,
                        minut: minut + 1,
                    });
                 }
                 
             }else{
                this.setState({
                    second: second + 1,
                });
             }
            
         }, 1000);

         this.setState({
             interval: timer,
         })
     }

     stopClicked = () => {
        clearInterval(this.state.interval);
        this.setState({
            btnDisable:false,
        })
     }

     intervalClicked = () => {
         const { hour, minut , second, intervalStores} = this.state;
         intervalStores.push(`${hour}:${minut}:${second}`);
         this.setState({
             intervalStores:intervalStores,
         })
     }

     clearClicked = () =>{
        this.stopClicked();
        this.setState({
            second:0,
            minut:0,
            hour:0,
            intervalStores:[],
        })
     }
    render() {
     
        const {second, minut, hour, btnDisable, intervalStores} = this.state;

        return (
            <div>
               <div className="timer-container">
                   <h1 className="mb-4"><span>Online</span> Stopwatch</h1>

                   <div className="timer-col">
                       <p className="timer-hours">{hour}</p>
                       <p className="timer-label">Hours</p>
                   </div>

                   <div className="timer-col">
                       <p className="timer-minutes">{minut}</p>
                       <p className="timer-label">Minutes</p>
                   </div>

                   <div className="timer-col">
                       <p className="timer-seconds">{second}</p>
                       <p className="timer-label">Seconds</p>
                   </div>

               </div>

               <div className="timer-container text-center">
                   <div className="timer-btn">
                       <button className="btn btn-success" disabled={btnDisable}  onClick={this.startClicked}>Start</button>
                   </div>
                   <div className="timer-btn">
                       <button className="btn btn-danger" onClick={this.stopClicked}>Stop</button>
                   </div>
                   <div className="timer-btn">
                       <button className="btn btn-secondary" disabled={!btnDisable}  onClick={this.intervalClicked}>Interval</button>
                   </div>
                   <div className="timer-btn">
                       <button className="btn btn-warning"  onClick={this.clearClicked}>Clear</button>
                   </div>
               </div>

               <div className="timer-container-interval text-center">
                   {intervalStores.map((item, index) => <p>{index + 1}. =&gt; {item}</p>)}
               </div>
            </div>
        )
        
        
    }
}

export default App;