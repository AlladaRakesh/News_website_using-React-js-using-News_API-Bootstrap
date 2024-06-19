import React from 'react';

function Navbar({setCategory}) {
    return (
        <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark"style={{cursor:"pointer"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="Main"><span className='badge text-bg-light text-dark fs-5' id="Main">MY NEWS</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link " onClick={()=>setCategory("Technology")}>Technology</a>
        <a className="nav-link" onClick={()=>setCategory("Business")} >Business</a>
        <a className="nav-link"onClick={()=>setCategory("Health")} >Health</a>
        <a className="nav-link " onClick={()=>setCategory("Sports")} >Sports</a>
        <a className="nav-link "onClick={()=>setCategory("Entertainment")} >Entertainment</a>

      </div>
    </div>
  </div>
</nav>  
        </div>
    );
}

export default Navbar;