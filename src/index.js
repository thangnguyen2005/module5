import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';

// bài 1
// const fruits = [
//     "Apple",
//     "Banana",
//     "Orange",
//     "Apricot",
//     "Black rowan",
//     "Cranberry"
//   ];
  
//   const element = (
//     <div>
//       <h1>List of fruits</h1>
//       <ul>
//         {fruits.map(item => (
//           <li>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
  
//   ReactDOM.render(element, document.getElementById('root'));

//bài 2
//   const tick = () => {
//       root.render(
//           <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// setInterval(tick, 1000);
//reportWebVitals();

//bài 3
// const students = [
//     {
//       company: 'Alfreds Futterkiste',
//       contact: 'Maria Anders',
//       country: 'Germany'
//     },
//     {
//       company: 'Centro comercial Moctezuma',
//       contact: 'Francisco Chang',
//       country: 'Mexico'
//     },
//     {
//       company: 'Ernst Handel',
//       contact: 'Roland Mendel',
//       country: 'Austria'
//     },
//     {
//       company: 'Island Trading',
//       contact: 'Helen Bennett',
//       country: 'UK'
//     },
//     {
//       company: 'Laughing Bacchus Winecellars',
//       contact: 'Yoshi Tannamuri',
//       country: 'Canada'
//     },
//     {
//       company: 'Magazzini Alimentari Riuniti',
//       contact: 'Giovanni Rovelli',
//       country: 'Italy'
//     }
//   ];
  
//   ReactDOM.render(
//     <table>
//       <tbody>
//         {students.map(student => (
//           <tr key={student.company}>
//             <td>{student.company}</td>
//             <td>{student.contact}</td>
//             <td>{student.country}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>,
//     document.getElementById('root')
//   );

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const element = (
//   <div className="container">
//     <div className="card">
//       <div className="card-header" />
//       <img
//         className="avatar"
//         src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//         alt="avatar"
//       />
//       <div className="card-body">
//         <div>
//           <p className="text-header">Ruma Khan</p>
//           <p className="text-sub">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry
//           </p>
//           <button className="btn third">FOLLOW</button>
//         </div>
//       </div>
//     </div>
//   </div>
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
