// import Counter from './Counter'
function Navbar() {
  return (
    <>
    
      <nav class="navbar navbar-expand-lg bg-light  fixed-top top-0">
        <div class="container-fluid mx-auto shadow-lg ">
          <a class="navbar-brand text-primary fw-bld fs-4" href="#">
            COURSERA
          </a>
          {/* <a class="navbar-brand text-light  bg-primary" href="#">
            Explorer
            <ul class="dropdown-menu"></ul>
          </a>
          <a class="navbar-brand text-primary fs-4" href="#">
            Action
          </a> */}
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
                    <a class="dropdown-item text-dark" href="#">
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
              <li class="nav-item ">
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
                <a class="nav-link text-dark" href="#">
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
        className="text-center rounded-0 alert alert-primary w-100 text-dark fs-5"
      >
        New!{" "}
        <span className="text-decoration-underline fw-bold text-dark">2023 learner outcome report. </span>{" "}
        <span className="fs-5">Discover how 77% learners achieved career benefits on Cousera.</span>
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
          <div className="col-4 mt-4 mx-5">
            <h1 className="fs-1 fw-bold">Learn without limits</h1>
          </div>
            <div className="mt-4 fs-5 mx-5">
              Start, switch, or advance your career with more than 5,400
            </div>
            <div className="fs-5 mx-5">
              courses, Professional Certificates, and degrees from world-class
            </div>
            <div className="fs-5 mx-5">universities and companies.</div>
            {/* <div className="btn btn-primary mt-3">Join for Free</div>
               <div>Try Coursera for Bussiness</div> */}
            <button class="btn btn-primary p-3 mt-3 mx-5 fw-bold">Join for Free</button>
            <button class=" pe-4 px-4 mx-3 p-2 mt-3 text-primary border-primary border round fs-5 fw-bold mt-5">
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
     

      <div className="w-100 bg-light shadow-sm m-auto p-5 text-center fs-3 fw-bold">
        We collaborate with{" "}
        <span className="text-primary fw-bold">
          300+ leading universities and companies
        </span>
        <div className="container">
          <div className="d-flex">
            <div className="col-9">
              <img
                className="" src="illinois-3.png" alt=""
              />
              <img className="" src="duke-3.png" alt="" />
              <img className="" src="google.png" alt="" />
              <img className="mx-4" src="IBM-Logo-Blk---Square.png" alt="" />
              <img className="mx-3" src="ImperialCollegeLondon_BLUE_500x500px.png" alt="" />
              <img className="" src="imperial.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-dark mt-3 mx-5 fs-4 fw-bold">Launch a new career in as little as 6 months <span className="fs-6 mx-4">View all roles-</span></div> 
      {/* <div className=" mt-3 mx-4 fs-3">Get job-ready for an in-demand career</div>
      <div className=" mt-3 mx-4 fs-5">Break into a new field like information technology or data science. No prior experience necessary to get started.</div> */}
     <div className="w-100 bg-light shadow-sm m-auto">
      <div className="mx-5 mt-4 text-primary">Project Manager <span className="text-dark mx-3" className="mx-3 text-dark">Data Analyst <span className="mx-3 text-dark">UX Designer <span className="mx-3 text-dark">IT Support Specialist <span className="mx-3 text-dark">Digital Marketer <span className="mx-4">Dtat Scientist <span className="mx-4">Front End Developer <span className="mx-3">BookKeeper</span></span></span></span></span></span></span>
      </div>
     </div>

     <div className="container">
       <div className="row">
         <div className="col-11 mx-5 border border-light-3 mt-3">
        <div className="mt-4 mx-4 fs-3 fw-bold ">Project Manager</div>
        <div className="mx-4 mt-1">Oversee the planning and execution of projects to ensure they're successful</div>
         <div className="fw-bold mt-5 mx-4">Median entry-level salary</div>
         <div className="container">
           <div className="row">
             <div className="col-4">

         <div className="bg-secondary rounded-2 fw-bold text-dark mx-3 mt-3">All occupation</div>
             </div>
           </div>
         </div>
         <div className="border bg-primary mx-4 mt-3 rounded-2">Project Manager</div>
         <div className="border border-light-2 mt-4"></div>
         <div className="mx-4 mt-3">job openings: <span className="fw-bold">477,722</span> <span className="fw-bold">**</span></div>
         <div className="mx-4 mt-2">projected 10 year growth: <span className="fw-bold">+12.6%</span> <span className="fw-bold">***</span></div>
       <div className="fw-bold mt-5 mx-4 fs-5">Recommended Pofessional Certificates</div>

       <div className="container">
         <div className="row">
           <div className="col-12">
             <div className="col-4 shadow mx-4">

             <img src="Pythonlearn_thumbnail_1x1.png" alt=""/>
             <img className="mt-3" src="google.png" alt=""/>
             <div className="fw-bold">Google Project Manager:</div>
             <div>Skills you'ii gain: <span className="fs-6">Original Cuture,Career,Development,Strategic Thinking,Change...</span></div>
             <div className="mt-3">4.8 (80.8k reviews)</div>
             <div className="mt-2">Begginer.Professional Certificate</div>
             <div className="container">
               <div className="row">
                 <div className="col-5 shadow">
                  <h1>hello</h1>
             </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
         </div>
       </div>
     </div>


      

     
    </>
  );
}
export default Navbar;
