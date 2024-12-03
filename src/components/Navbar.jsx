import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar({ setCategory }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a class="navbar-brand" href="#">
            <h1
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "8px",
                padding: "2px",
              }}
            >
              NEWS
            </h1>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => {
                    setCategory("headlines");
                  }}
                  style={{}}
                >
                  Headlines
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => {
                    setCategory("Health");
                  }}
                >
                  Health
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => {
                    setCategory("Finance");
                  }}
                >
                  Finance
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => {
                    setCategory("Technology");
                  }}
                >
                  Technology
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => {
                    setCategory("Entertainment");
                  }}
                >
                  Entertainment
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => {
                    setCategory("World");
                  }}
                >
                  World
                </div>
              </li>

              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => {
                    setCategory("Sports");
                  }}
                >
                  Sports
                </div>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div
              style={{
                margin: "10px",
                display: "flex",
                gap: "10px",
              }}
            >
              <button type="button" class="btn btn-outline-primary">
                Register
              </button>

              <button type="button" class="btn btn-outline-primary">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
