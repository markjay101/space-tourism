import destinationInfo from "/public/assets/data/data.json";
import { useState } from "react";
export default function DestinationPage() {
  const [selectedDestinationImg, setSelectedDestinationImg] = useState(
    "../assets/destination/image-moon.png"
  );
  function handleClick(img) {
    setSelectedDestinationImg(img);
  }
  return (
    <div className="destination-page container-fluid vh-100 d-flex overflow-scroll pt-5">
      <div className="row w-100 mt-5 mt-lg-0 pt-5 mx-auto">
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-end justify-content-lg-center align-items-center pe-0 ps-0 pe-lg-5">
          <h1 className="text-white text-center mb-5 align-self-center align-self-sm-start align-self-md-start align-self-lg-center ms-0 ms-sm-4 ms-md-5 ms-lg-5">
            <span className="text-secondary fw-bolder me-4">01</span>PICK YOUR
            DESTINATION
          </h1>
          <div className="ms-0 ms-lg-auto me-0 me-lg-5 mt-0 mt-lg-5 d-flex justify-content-center align-items-center">
            <img src={selectedDestinationImg} alt="" />
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start align-items-center ps-0 pe-0 ps-lg-5 pb-5 mt-5 pb-lg-0 mt-lg-0">
          <div className="d-flex flex-column align-items-center align-items-lg-start ms-0 ms-lg-5 mt-3 w-100">
            <ul className="nav nav-tabs border border-0">
              {destinationInfo.destinations.map((destination, index) => {
                let onClick = destination.name + "Click()";
                let tabId = destination.name + "-tab";
                let dataTarget = "#" + destination.name;
                let className =
                  index == 0
                    ? "nav-link active pb-2 px-0 border border-0 mt-0 mt-lg-5"
                    : "nav-link border pb-2 px-0 border-0 mt-0 mt-lg-5";
                let isActive = index == 0 ? "true" : "false";
                return (
                  <li
                    className="nav-item me-3 me-lg-5 ms-3 ms-lg-0 "
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
                      aria-controls={destination.name}
                      aria-selected={isActive}
                      onClick={() => handleClick(destination.images.png)}
                    >
                      {destination.name.toUpperCase()}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="tab-content mt-4 px-5 px-lg-0" id="nav-tabContent">
              {destinationInfo.destinations.map((destination, index) => {
                let className =
                  index == 0 ? "tab-pane fade show active" : "tab-pane fade";
                let label = destination.name + "-tab";
                return (
                  <div
                    key={index}
                    className={className}
                    id={destination.name}
                    role="tabpanel"
                    aria-labelledby={label}
                  >
                    <h2 className="text-center text-lg-start">
                      {destination.name.toUpperCase()}
                    </h2>
                    <div>
                      <p className="mb-0">{destination.description}</p>
                    </div>
                    <hr className="border mt-0 mb-4" />
                    <div className="row">
                      <div className="col-12 col-sm-6 col-md-6 col-lg-6 d-flex flex-column align-items-center align-items-lg-start mb-4 mb-sm-0 mb-md-0 mb-lg-0">
                        <span>AVG. DISTANCE</span>
                        <h3 className="mt-2">
                          {destination.distance.toUpperCase()}
                        </h3>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-6 d-flex flex-column align-items-center align-items-lg-start ">
                        <span>EST. TRAVEL TIME</span>
                        <h3 className="mt-2">
                          {destination.travel.toUpperCase()}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
