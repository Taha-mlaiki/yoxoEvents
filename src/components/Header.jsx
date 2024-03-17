import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav style={{ backgroundColor: "transparent" }} data-bs-theme="dark" className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img width={130} src="/Logo.png" alt="" />
        </a>
        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div style={{backgroundColor: "rgba(255, 255, 255, 0.15)"}} className="sidebar offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header text-black border-bottom">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img style={{width:"70px"}} src="/mainlogo.png" alt=""/></h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-flex flex-column p-4">
              <ul className="navbar-nav ms-auto flex-grow-1 pe-3 gap-4">
                <li className="nav-item">
                    <Link style={{fontSize: "large"}} className="nav-link" href={"/"}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link style={{fontSize: "large"}} className="nav-link" href={"/events"}>Events</Link>
                </li>
                <li className="nav-item">
                    <Link style={{fontSize: "large"}} className="nav-link " aria-current="page" href={"/about"}>About Us</Link>
                  </li>
              </ul>
              
            </div>
          </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
    </nav>
  )
}

export default Header
