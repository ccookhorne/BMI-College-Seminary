import React from "react";
import Home from "./pages/Home";
import StudentLife from "./pages/StudentLife";

const Routing = [

    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/home",
        element: <StudentLife/>
    }

]
    // return (
    //     <BrowserRouter>
    //         <Routes>
    //             <Route path="/" Component={Home}/>
    //             <Route path="/home" Component={Home}/>
    //             <Route path = "/student-life" Component={StudentLife}/>
    //         </Routes>
    //     </BrowserRouter>
    // );



export default Routing;