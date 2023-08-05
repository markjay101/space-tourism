import technologyInfo from "../assets/data/data.json";
import { useState } from "react";
export default function TechnologyPage() {
  const [technologyImgPortrait, setTechnologyImgPortrait] = useState(
    "../assets/technology/image-launch-vehicle-portrait.jpg"
  );
  const [technologyImgLandscape, setTechnologyImgLandscape] = useState(
    "../assets/technology/image-launch-vehicle-landscape.jpg"
  );

  function handleClick(portrait, landscape) {
    setTechnologyImgLandscape(landscape);
    setTechnologyImgPortrait(portrait);
  }
  return (
    <div className="technology-page container-fluid vh-100 d-flex pt-5 px-0">
      <div className="row w-100 mt-5 mt-lg-0 pt-5 mx-auto position-relative">
        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center px-0">
          <div className="d-flex flex-column ms-0 ps-0 ms-lg-5 ps-lg-5">
            <h1 className="text-white text-center mb-5 align-self-start pb-3 mx-5 mx-lg-0">
              <span className="text-secondary fw-bolder me-4">03</span>SPACE
              LUNCH 101
            </h1>
            <div className="d-flex d-lg-none w-100 mb-4">
              <img src={technologyImgLandscape} alt="" className="w-100" />
            </div>
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center align-items-lg-start justify-content-lg-start mt-5">
              <ul className="nav nav-tabs border border-0 d-flex flex-row flex-lg-column">
                {technologyInfo.technology.map((technology, index) => {
                  //let onClick = technology.name + "Click()";
                  let name = technology.name.replace(" ", "");
                  let tabId = name + "-tab";
                  let dataTarget = "#" + name;
                  let className =
                    index == 0
                      ? "nav-link active pb-2 px-0 border border-0 "
                      : "nav-link border pb-2 px-0 border-0 ";
                  let isActive = index == 0 ? "true" : "false";
                  return (
                    <li
                      className="nav-item my-0 my-lg-4 mx-3 mx-lg-0"
                      role="presentation"
                      key={index}
                    >
                      <button
                        className={className}
                        id={tabId}
                        data-bs-toggle="tab"
                        data-bs-target={dataTarget}
                        type="button"
                        role="tab"
                        aria-controls={name}
                        aria-selected={isActive}
                        onClick={() =>
                          handleClick(
                            technology.images.portrait,
                            technology.images.landscape
                          )
                        }
                      >
                        {index + 1}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div
                className="tab-content ms-0 ms-lg-5 mt-4 px-5 px-lg-0"
                id="nav-tabContent"
              >
                {technologyInfo.technology.map((technology, index) => {
                  let name = technology.name.replace(" ", "");
                  let className =
                    index == 0
                      ? "tab-pane fade show active "
                      : "tab-pane fade ";
                  let label = name + "-tab";
                  return (
                    <div
                      key={index}
                      className={className}
                      id={name}
                      role="tabpanel"
                      aria-labelledby={label}
                    >
                      <span className="d-flex justify-content-center justify-content-lg-start">
                        THE TECHNOLOGY...
                      </span>
                      <h2 className="mb-3 d-flex text-center text-lg-start justify-content-center justify-content-lg-start">
                        {technology.name.toUpperCase()}
                      </h2>
                      <p>{technology.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 d-none align-items-center justify-content-end px-0 portrait-img d-sm-none d-md-none d-lg-flex">
          <img src={technologyImgPortrait} alt="" />
        </div>
      </div>
    </div>
  );
}
