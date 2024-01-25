import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import AddComponent from './components/AddComponent';
import StudentInfoComponent from './components/StudentInfoComponent';
import { Component } from "react";
import Hello from "./components/Hello";
import Home from "./components/Home";
import Calculator from './components/Calculator';
import Counter from "./components/Counter";
import Selector from "./components/Selector";
import MyClock from "./components/MyClock";
import React, { useState } from 'react';
import StudentManage from "./StudentManage";

function App() {
  return (
    <div className="Container">
      <StudentManage />
    </div>
  );
}

export default App;

// const carList = ['Car 1', 'Car 2', 'Car 3'];
// const colorList = ['Red', 'Green', 'Blue'];

// function App() {
//   const [selectedCar, setSelectedCar] = useState({
//     car: carList[0],
//     color: colorList[0]
//   });

//   const handleCarChange = (event) => {
//     setSelectedCar((previousState) => {
//       return { ...previousState, car: event.target.value };
//     });
//   };

//   const handleColorChange = (event) => {
//     setSelectedCar((previousState) => {
//       return { ...previousState, color: event.target.value };
//     });
//   };

//   return (
//     <div>
//       <h1>Car Selection</h1>
//       <div>
//         <label htmlFor="car-select">Select a car:</label>
//         <select id="car-select" value={selectedCar.car} onChange={handleCarChange}>
//           {carList.map((car, index) => (
//             <option key={index} value={car}>
//               {car}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <label htmlFor="color-select">Select a color:</label>
//         <select id="color-select" value={selectedCar.color} onChange={handleColorChange}>
//           {colorList.map((color, index) => (
//             <option key={index} value={color}>
//               {color}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <h2>Selected Car:</h2>
//         <p>Car: {selectedCar.car}</p>
//         <p>Color: {selectedCar.color}</p>
//       </div>
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="Container">
//       <MyClock />
//     </div>
//   );
// }

// export default App;

// function App() {
//   return <Selector />;
// }

// export default App;

// function App() {
//   return <Counter />;
// }

// export default App;
 
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isExpand: false
//     };
//   }

//   handleToggleExpand = () => {
//     this.setState(prevState => ({
//       isExpand: !prevState.isExpand
//     }));
//   }

//   render() {
//     const { isExpand } = this.state;

//     return (
//       <div>
//         <h1>Conditional Rendering</h1>
//         {isExpand ? (
//           <div>
//             <button onClick={this.handleToggleExpand}>Đóng giới thiệu</button>
//             <p>Nội dung giới thiệu</p>
//           </div>
//         ) : (
//           <button onClick={this.handleToggleExpand}>Xem giới thiệu</button>
//         )}
//       </div>
//     );
//   }
// }

// export default App;

// class App extends Component{
//   constructor (props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false
//     };
//   }
 
//   handleLogIn = () => {
//     this.setState({ isLoggedIn: true })
//   }
 
//   handleLogOut = () => {
//     this.setState({ isLoggedIn: false })
//   }
  
//   render () {
//     const { isLoggedIn } = this.state
//     if (isLoggedIn) return (<Home onLogOut={this.handleLogOut} />)
//     return (
//       <div style={{textAlign: 'center'}}>
//         <div>
//             <h1>Please Log in</h1>
//             <button onClick={this.handleLogIn}>Log in</button>
//         </div>
//       </div>
//     )
//   }
// }
 
// export default App

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: true
//     };
//   }

//   delete = () => {
//     this.setState({ display: false });
//   };
 
//   render() {
//     let comp;
//     if (this.state.display) {
//       comp = <Hello />;
//     }
//     return (
//       <div style={{ textAlign: 'center' }}>
//         {comp}
//         <button onClick={this.delete}>
//           Delete the component
//         </button>
//       </div>
//     );
//   }
// }
 
// export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       color: 'black'
//     };
//   }

//   componentDidMount() {
//     this.intervalID = setInterval(() => {
//       const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);  
//       this.setState({ color: randomColor });  
//     }, 100);
//   }
  
//   componentWillUnmount() {
//     clearInterval(this.intervalID);
//   }

//   render() {
//     return (
//       <div>
//         <div
//           style={{
//             backgroundColor: this.state.color,
//             paddingTop: 20,
//             width: 400,
//             height: 80,
//             margin: 'auto'
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       number: 0
//     };
//   }

//   increase = () => {
//     this.setState({ number: this.state.number + 1 });
//   };
//   decrease = () => {
//     this.setState({ number: this.state.number - 1 });
//   };

//   render() {
//     return (
//       <div style={{ textAlign: "center", padding: 30 }}>
//         <button onClick={this.decrease}>Decrease</button>
//         <span style={{ padding: 10 }}>{this.state.number}</span>
//         <button onClick={this.increase}>Increase</button>
//       </div>
//     );
//   }
// }

// export default App;

// function Headline(props) {
//   return (
//     <h1>Headline</h1>
//   );
// }

// const HeadlineWithProps = ({ value }) => {
//   return (
//     <h1>
//       Headline
//       {value}
//     </h1>
//   );
// };

// function App() {
//   const msg = "Welcome";
//   return (
//     <>
//       {/* <Header />
//       <Sidebar msg={msg} />
//       <Footer />
//       <Headline />
//       <HeadlineWithProps value={msg} />
//       <div className="App">
//         <Welcome name="Nguyễn Ngọc Thắng" />
//       </div>
//       <AddComponent firstNumber={1} secondNumber={2} /> */}
//       <StudentInfoComponent/>
//     </>
//   );
// }
// export default App;

    

// class App extends Component {
//   render() {
//     return (
//       <div>
//       <Calculator/>
//       </div>
//     );
//   }
// }
// export default App;

// <input type="checkbox"></input>