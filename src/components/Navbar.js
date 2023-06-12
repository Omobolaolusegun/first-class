// import Counter from './Counter'
import './Navbar.css';
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
            <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle bg-primary mt-3 border border-dark mx-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Explore
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Goal</a></li>
    <li><a class="dropdown-item mt-4" href="#">Take a free courses
    <div className="mt-2">Earn a Degrees <span className="mx-4">...</span></div>
    <div className="mt-2">Earn a Certificate <span className=
    "mx-4">...</span></div>
    <div className="mt-2">Find your new career</div>
    
    </a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
              
              <form class="d-flex" role="search">
                <input
                  class="form-control"
                  type="search"
                  placeholder="What do you want"
                  aria-label="Search"
                />
                <button class="bg-primary" type="submit">
                  search
                </button>
              </form>
              <li class="nav-item bg-light mx-4">
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
                      <div className="fw-bold">Online Degrees</div>
                      <div>Explore Bachelore's & Master's Degrees</div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                     <div className="fw-bold">Master Track</div>
                     <div>Earn credit towards a Master's degrees</div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <div className="fw-bold">University Certificates</div>
                      <div>Advance your career with graduate-level learning</div>
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
          <div className="row">
            <div className="col-2">
              <div><img src="illinois-3.png" alt=""/></div>
            </div>
            <div className="col-2">
        <div><img src="duke-3.png" alt=""/></div>
            </div>
            <div className="col-2">
              <div><img src="google.png" alt=""/></div>
            </div>
            <div className="col-1">
            <div><img src="umich.png" alt=""/></div>
            </div>
            <div className="col-2">
              <div><img src="1000px-IBM_logo.svg.png" alt=""/></div>
            </div>
            <div className="col-2">
              <div><img src="imperial.png" alt=""/></div>
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
         <div className="col-11 mx-5 border border-light-5 mt-3">
        <div className="mt-4 mx-4 fs-3 fw-bold ">Project Manager</div>
        <div className="mx-4 mt-1">Oversee the planning and execution of projects to ensure they're successful</div>
         <div className="fw-bold mt-5 mx-4">Median entry-level salary</div>
         <div className="container">
           <div className="row">
             <div className="col-7">

         <div className="shadow bg-secondary rounded-2 fw-bold text-dark mx-3 mt-3 p-2">All occupation</div>
             </div>
             <div className="col-2 mt-3">$37,960 <span>*</span></div>
           </div>
         </div>
         <div className="container">
           <div className="row">
             <div className="col-10">
         <div className="border bg-primary mx-3 mt-3 rounded-2 p-2">Project Manager</div> 
             </div>
             <div className="col-2 mt-3">$86,500 <span>**</span></div>
           </div>
         </div>
         <div className="border border-light-2 mt-4"></div>
         <div className="mx-4 mt-3">job openings: <span className="fw-bold">477,722</span> <span className="fw-bold">**</span></div>
         <div className="mx-4 mt-2">projected 10 year growth: <span className="fw-bold">+12.6%</span> <span className="fw-bold">***</span></div>
       <div className="fw-bold mt-5 mx-4 fs-5">Recommended Pofessional Certificates</div>

       <div className="container-fluid">
         <div className="row">
             <div className="col-4 shadow mx-4">

             <img src="Pythonlearn_thumbnail_1x1.png" alt=""/>
             <img className="mt-3" src="google.png" alt=""/>
             <h5 className="mt-3">Google Project Manager:</h5>
             <div>Skills you'ii gain: <span className="fs-6">Original Cuture,Career,Development,Strategic Thinking,Change...</span></div>
             <div className="mt-3">4.8 (80.8k reviews)</div>
             <div className="mt-1">Begginer.Professional Certificate.6months</div>
             </div>
               <div className="col-4 shadow">
                 <img className="m-3" src="DBA-ProCert.jpg" alt=""/>
                 <img src="1000px-IBM_logo.svg.png" alt=""/><span className="mx-4">IBM</span>
                 <h5 className="mt-3">IBM Project Manager</h5>
                 <div>Skills you'ii gain:Project initiation,communication,Risk Management,Leadership,...</div>
                 <div className="mt-4">Begginer.Professional Certificate.3month</div>
           </div>
      <div className="fw-bold text-end pe-5">Explore all Certificate--</div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-2">
      <div className="mt-5 mx-2"><img src="download (17).jpg" alt=""/></div>
          </div>
        <div className="col-10 mt-5">
          <div>"Earning my Google Project Manager:Professional Certificate is one of the biggest accomplishments i've made in my education,and it was a key stepping stone to my new career."</div>
          <div className="mt-5">-Aderienne</div>
        </div>
        
          <div className="border border-light-2 mt-4"></div>
         <div className="container">
           <div className="row">
             <div className="col-12">
          <div className="mt-5 mx-2">*Employment,Wages,and Projected Change in Employment by Typical Entry-level Education:U.S.Bureau of Labour Statistics.Sept.2022,www.bls.gov/emp/tables/education-summary.html;</div>
          <div className="mx-2">**Median salary and job opening data are sourced from United State Lastcast job postings report.Data for job roles relevant to featured programs(1/1/22-12/31/22)</div>
          <div>***Growth rate data is sourced from United States LightCast job postings report.Data for job role relevant to featured programs(1/1/22-12/31-22)</div>
             </div>
           </div>
         </div>
        </div>
      </div>
         </div>
       </div>
         </div>
       </div>

        <div className="mt-5 mx-5 fs-5 fw-bold text-primary">Master's and Bachelore's Degrees </div>
        <div className="mt-3 mx-5 fs-2 fw-bold">Find a top degrees that fits your life</div>
        <div className="mt-3 fs-5 mx-5">Breakthrought pricing on 100% online degrees from top universities.</div>


      <div className="container-fluid">
        <div className="row">
          <div className="col-3 shadow">
            <div className="mt-5 mx-5"><img src="images (4).jpg" alt=""/></div>
          <div className="mt-2 mx-5"><img src="Square-Logo-for-Partner-Landing-Page.png" alt=""/><span>University of illinois in urbana...</span></div>
        <div className="fw-bold fs-5 mx-5">Master of Bussiness Administration(iMBA)</div>
        <div className=" text-primary mx-3" ><img src="pick (2).png" alt=""/><span>Earn a degree</span></div>
        <div className="mx-5">Degree</div>
          </div>
          <div className="col-3 shadow">
            <div className="mt-5"><img src="images (3).jpg" alt=""/></div>
            <div><img src="google.png" alt=""/><span>University of North Texa</span></div>
            <div className="fw-bold fs-4">Bachelore of Applied Arts and Sciences</div>
            <div><img src="pick (2).png" alt=""/><span className="text-primary">Earn a degree</span></div>
            <div>Degree</div>
          </div>
          <div className="col-3 shadow">
            <div className="mt-5"><img src="images (5).jpg" alt=""/></div>
            <div><img src="Square-Logo-for-Partner-Landing-Page.png" alt=""/><span>University of illinois in urbana...</span></div>
            <div className="fw-bold fs-4">Master of Computer Science in Data Science</div>
            <div><img src="pick (2).png" alt=""/><span className="text-primary">Earn a degree</span></div>
            <div>Degree</div>
          </div>
          <div className="col-3 shadow">
          <div className="mt-5"><img src="images (6).jpg" alt=""/>
          <div><img src="Square-Logo-for-Partner-Landing-Page.png" alt=""/><span>University of Utah...</span></div>
          <div className="fw-bold fs-4">Master of Science in Cybersecurity...</div>
          <div><img src="pick (2).png" alt=""/><span className="text-primary">Earn a degree</span></div>
          <div>Degree</div>
          </div>
          </div>
          </div>
        </div>
        <div>
        <div class="spinner-grow text-primary mx-5" role="status">
                 <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-primary mx-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-secondary mx-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-success mx-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-danger mx-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-warning mx-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-info mx-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-light mx-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-dark mx-5 mt-3" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
        </div>
        <div className="text-center fw-bold text-primary text-decoration-underline">Explore Degree--</div>

        <div className="mx-5 text-primary fw-bold">Courses and Specializations</div>
        <div className="mx-5 fs-1">Courses you can complete in a day</div> 
        <div className="mx-5 fs-4">Choose from over5,400 courses in topics like business analytics ,graphics design,python,and more.</div> 

        <div className="container-fluid">
          <div className="row">
            <div className="col-3 shadow">
        <div className="mx-5 mt-5">
          <div><img src="cyber3.jpg" alt=""/></div>
        </div>
        <div className="mx-5">
          
        <div><img src="google.png" alt=""/><span>Google</span></div>
        <div className="fw-bold fs-5">Foundation of Cybersecurity</div>
        <div className="mt-5">Course</div>
        </div>
            </div>
            <div className="col-3 shadow">
              <div>
                <div><img src="phone5.jpg" alt=""/></div>
                <div>
                  <div><img src="google.png" alt=""/><span>Meta</span></div>
                  <div className="fw-bold fs-5">Introduction to Social Media Marketing</div>
                  <div className="mt-5">Course</div>
                </div>
              </div>
            </div>
            <div className="col-3 shadow">
              <div>
                <div><img src="pythonlearn_thumbnail_1x1.png" alt=""/></div>
                <div><img src="google.png" alt=""/><span>University of Michigan</span></div>
                <div className="fw-bold fs-5">Programming for Everybody(Getting Start..</div>
                <div className="mt-5">Course</div>
              </div>
            </div>
            <div className="col-3 shadow">
              <div>
                <div><img src="sitt2.jpg" alt=""/></div>
                <div><img src="google.png" alt=""/><span>Intuit</span></div>
                <div className="fw-bold fs-5">BookKeeping Basics</div>
                <div className="mt-5">Course</div>
              </div>
            </div>
            </div>
            </div>

            <div class="spinner-grow text-primary mx-5 mt-4" role="status">
                 <span class="visually-hidden">Loading...</span>
              </div>   
              <div class="spinner-border text-primary mx-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-warning mx-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-success mx-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-dark mx-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-secondary mx-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-danger mx-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-info mx-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-primary mx-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<div className="text-center text-primary fw-bold text-decoration-underline">Explore Skills--</div>

<div className="text-primary mx-4 mt-5">100% Free</div>
<div className="fs-1 mx-4">Start learning with free courses</div>
<div className="mx-4 fs-4">Explore free omline courses from the world's top universities and companies.</div>

<div className="container-fluid">
  <div className="row">
    <div className="col-3 shadow">
      <div>
        <div><img src="Logo_TheScienceofWell-Being.png" alt=""/></div>
      </div>
    </div>
  </div>
</div>


        
   


      

     
    </>
  );
}
export default Navbar;
