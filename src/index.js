import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Cbt } from './components/Cbt';
// import Counter from './components/Counter'
// import Navbar from './components/Navbar'
// import State from './components/State'
import SignIn from './components/SignIn';
// import Bndout from './components/Bndout'
// import Nav from "./components/Nav"

// import Button from './components/Button'
// import Child from './components/Child'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Cbt/> */}
    {/* <Counter/> */}
    {/* <Navbar/> */}
    {/* <State/> */}
    <SignIn/>
    {/* <Bndout/> */}
    {/* <Nav/> */}
    
    {/* <Button/> */}
    {/* <Child/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
