// import react, {useState} from 'react'

export default function Navbar(props) {

    return (
        <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <h3><a className={`navbar-brand bg-${props.mode} bg-${props.mode} p-2 rounded-pill`} href="/">
            Text.txt
          </a></h3>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
            {/* <div className={`form-check form-switch text-${props.mode==='light'? 'Dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Enable DarkMode </label>
          </div> */}
          <button onClick={props.toggleMode} style={{background:"none", border:"none"}}>
          {/* <FontAwesomeIcon icon="fas fa-sun" /> */}
          <i className={`fas fa-sun text-${props.mode==='light'? 'Dark' : 'light'}`}></i>
          </button>
          </div>
        </div>
      </nav>
        </div>
        )
}