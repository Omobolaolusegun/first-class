// import Counter from './Counter'
function Navbar() {
  return (
    <>
    
      <nav class="navbar navbar-expand-lg bg-light  fixed-top top-0">
        <div class="container-fluid mx-auto shadow-lg ">
          <a class="navbar-brand text-primary fs-3" href="#">
            COURSERA
    {/* <Counter/> */}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item bg-primary">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Explore
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-3 mx-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="bg-primary" type="submit">
                  Search
                </button>
              </form>
              <li class="nav-item bg-light mx-1">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  online degrees
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Find your New Career
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">
                  For Enterprise
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  For Universities
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-primary" href="#">
                  Log In
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link bg-primary rounded rounded-0" href="#">
                  Join for Free
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <br />
      <br />

      <div
        id="close"
        className="text-center rounded-0 alert alert-primary w-100"
      >
        Discover neuroscientific strategies to drive employee engagement{" "}
        <span className="text-decoration-underline">Get theE-book </span>{" "}
        <button
          className="btn btn-close bg-light text-dark rounded-0"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <br />
      <br />
     
      <div className="container ">
        <div className="d-flex ">
          
          <div className="col-8">
          <div className="col-4 mt-4">
            <h1 className="fs-1">Learn without limits</h1>
          </div>
            <div className="mt-4 fs-5 ">
              Start, switch, or advance your career with more than 5,400
            </div>
            <div className="fs-5 ">
              courses, Professional Certificates, and degrees from world-class
            </div>
            <div className="fs-5">universities and companies.</div>
            {/* <div className="btn btn-primary mt-3">Join for Free</div>
               <div>Try Coursera for Bussiness</div> */}
            <button class="btn btn-primary p-3 mt-3 ">Join for Free</button>
            <button class=" pe-4 px-4 mx-3 mt-3 text-primary border-primary">
              Try Coursera for Bussiness
            </button>
          </div>
          <img
            className=""
            src="CourseraLearners_C_Composition_Hillary_copy__3_.png"
            alt=""
          />
        </div>
      </div>

      <div className="w-100 bg-secondary shadow-sm mt-4 p-5 text-center fs-3">
        We collaborate with{" "}
        <span className="text-primary text-decoration-underline">
          275+ leading universities and companies
        </span>
        <div className="container">
          <div className="d-flex">
            <div className="col-8">
              <img
                className="" src="illinois-3.png" alt=""
              />
              
              <img className="mx-3" src="duke-3.png" alt="" />
              <img className="" src="google.png" alt="" />
              <img className="mx-3" src="IBM-Logo-Blk---Square.png" alt="" />
              <img className="mx-3" src="ImperialCollegeLondon_BLUE_500x500px.png" alt="" />
              <img className="" src="imperial.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-primary mt-3 mx-4 fs-4 fw-bold">Professional Certificates</div>
      <div className=" mt-3 mx-4 fs-3">Get job-ready for an in-demand career</div>
      <div className=" mt-3 mx-4 fs-5">Break into a new field like information technology or data science. No prior experience necessary to get started.</div>
      
    </>
  );
}
export default Navbar;
