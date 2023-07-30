import './App.css';
import React, {useEffect, useState} from "react";
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./pages/Index";
import { Route, Routes } from "react-router-dom";
import {Container} from "react-bootstrap";
import Instructors from "./pages/Instructors";
import Categories from "./pages/Categories";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Container>
                <Routes>
                    <Route exact path="/" element={<Index/>} />
                    <Route exact path="/categories" element={<Categories />} />
                    <Route exact path="/instructors" element={<Instructors />} />
                </Routes>
            </Container>
        </div>
    );
}

export default App;
