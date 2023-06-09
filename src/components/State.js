import React from 'react'

const State = () => {
    return (
        <>
        {/* <div className="container">
            <div className="m-auto">
            <div className=" text-center gap-2 p-2">
               <div className="rounded-rounded-0"></div>
               </div>
            </div>
        </div>
        <div className="d-flex justify-content-between m-auto pt-3">
            <div className="px-3 py-4 bg-primary rounded-circle"></div>

        </div>
        <div><button className="w-12 h-12 rounded-full bg-slate-700 m-auto"></button>
        </div>
        <div className="text-center m-auto mt-3 pt-3">
            <img src="favicon2_ (6).png" className="m-auto" alt=""/>
            <div className="">Google Meet</div>
        </div>
        <div className="text-center m-auto pt-5">
            <img src="favicon2_ (5).png" className="m-auto" alt=""/>
        </div> */}
            <nav class="nav">
  <a class="nav-link active fs-2 fw-bold" aria-current="page" href="#">COUSERA</a>
  <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle bg-primary mt-3 border border-dark mx-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Explore
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
  <a class="nav-link mt-2 p-1 m-2 mx-5" href="#">What do you want </a>
  <div class="dropdown">
  <button class=" dropdown-toggle mt-4 mx-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Online Degrees
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Online Degrees <div>Explore Bachelore's & Master's Degrees</div></a></li>
    <li><a class="dropdown-item" href="#">Mater Track <div>Earn credit toward's a master degree</div></a></li>
    <li><a class="dropdown-item" href="#">University Certificate <div>Advance your career with graduate-level learning</div></a></li>
  </ul>
</div>
  <a class="nav-link mt-3 text-dark" href="#">find your New Career</a>
  <a class="nav-link" href="#">Disabled</a>
</nav>
        </>
    )
}

export default State