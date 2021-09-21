import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router, Link} from 'react-router-dom';
import { Route, Switch } from "react-router";
import Description from "./components/Description";
import movie from "./components/Movie";
import AddModal from "./components/AddModal";



ReactDOM.render(
  <React.StrictMode>
    
<Router>
    
   <App />
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals