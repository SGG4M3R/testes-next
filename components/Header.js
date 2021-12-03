function Header() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-0">
          <div className="container">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase fw-bold fs-6">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Habilidades</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Portfólio</a>
                    </li>
                </ul>
            </div>
          </div>
        </nav>
        </>
    )
}

export default Header