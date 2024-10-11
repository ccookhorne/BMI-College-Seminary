import { useNavigate } from "react-router-dom";





const Navbar = () =>{
    const navigate = useNavigate();



    const navigationCheck= (url: string) =>{
      if(url === "/home"){
        navigate(url)
      }
      else if ( url === "/student-life"){
        navigate(url)
      }
    }





    return (
        <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <button className="nav-lin" onClick={() =>navigationCheck("/home")}>Home <span className="sr-only">(current)</span></button>
      </li>
      <li className="nav-item">
      <button className="nav-lin" onClick={() => navigationCheck("/student-life")}>Home <span className="sr-only">(current)</span></button>
      </li>
    </ul>
  </div>
</nav>
</>
    )
}


export default Navbar