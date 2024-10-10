import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import StudentLife from "./pages/StudentLife";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/home" Component={Home}/>
                <Route path = "/student-life" Component={StudentLife}/>
            </Routes>
        </BrowserRouter>
    );


}

export default Routing;