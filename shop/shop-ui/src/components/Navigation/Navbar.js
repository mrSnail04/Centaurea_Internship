import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {

  return (
      <div className='App'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Ticket Shop</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Главная</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Авторизация</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Регистрация</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default Navbar;
