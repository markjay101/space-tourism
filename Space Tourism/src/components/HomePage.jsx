import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="landing-page container-fluid vh-100 d-flex">
      <div className="row col-12 mt-5 mt-md-5 mt-lg-auto mb-5 mb-md-5 mb-lg-5 mx-auto justify-content-center">
        <div className="col-lg-6 col-md-12 col-sm-12 text-md-right mt-5 mt-md-5 mt-lg-0 px-0">
          <div className="text-container mx-auto mt-0 mt-sm-5 mt-md-5 mt-lg-0 pt-5 mt-pd-5 pt-lg-0 text-center text-md-center text-lg-start mb-0 pb-0 mb-lg-5 pb-lg-5">
            <h3>SO, YOU WANT TO TRAVEL TO</h3>
            <h1 className="mt-4"> SPACE</h1>
            <p className="mt-4 mb-0">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center mt-5 mt-md-5 mt-lg-0 pb-5 mb-0 mb-lg-5">
          <Link to="/destination" className="m-auto mb-sm-5 mb-lg-0">
            <button className="btn btn-circle btn-light ">EXPLORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
