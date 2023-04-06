import React from 'react';
import ReactDOM from 'react-dom/client';
import {CourseList} from './App';


import './styles.css';



ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CourseList/>
        {/* <FirstApp title="Hola, Soy Vegeta" /> */}
    </React.StrictMode>
);

