import { Link, Outlet } from "react-router-dom";

function Layout(){
    return(
       <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand">WT Practicals</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link className="nav-link" to="/home" >Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link className="nav-link" to="/about" >About</Link>
                        </li>
                        <li class="nav-item">
                        <Link className="nav-link" to="/contact" >Contact</Link>
                        </li>
                        <li class="nav-item">
                        <Link className="nav-link" to="/student" >Student</Link>
                        </li>
                        <li class="nav-item">
                        <Link className="nav-link" to="/course" >Course</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <body>
                <Outlet />
            </body>
        </>
    )
};

export default Layout
