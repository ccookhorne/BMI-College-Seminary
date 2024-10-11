import { useNavigate } from "react-router-dom";





const Navbar = () =>{
    const navigate = useNavigate();


    const navbarOpen = () =>{
      // we will look at this later but it is a method that should call two different looks for the navbar
      // one closed and one open, the open needs new css too open from the left 
    
    }


    return (
        <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  
  
  <button className="navbar-toggler" onClick={navbarOpen()}>
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <button className="nav-lin" onClick={() =>navigate("/home")}>Home <span className="sr-only">(current)</span></button>
      </li>
      <li className="nav-item">
      <button className="nav-lin" onClick={() => navigate("/student-life")}>Student Life <span className="sr-only">(current)</span></button>
      </li>
    </ul>
  </div>
</nav>
</>
    )
}


export default Navbar