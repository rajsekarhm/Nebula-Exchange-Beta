import { useNavigate } from "react-router-dom";
export const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a
          className="navbar-brand"
          href="# "
          style={{ fontFamily: "monospace" }}
        >
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto ps-5">
            <li className="nav-item">
              <a
                className="nav-link"
                href="# "
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="# "
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main role="main" className="container mt-5">
        <div className="container">
          <div className="mt-5 text-center">
            <h3 style={{ fontFamily: "monospace" }}>
              {" "}
              All in One FinTech
            </h3>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/marketPlace")}
              style={{ fontFamily: "monospace" }}
            >
              {" "}
              Global Markets
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
