import crewInfo from "/public/assets/data/data.json";

let carouselIndicator = crewInfo.crew.map((crew, index) => {
  let className = index == 0 ? "active mx-3" : "mx-3";
  let aria = index == 0 ? "true" : "false";
  let label = "Slide " + (index + 1);
  return (
    <button
      key={index}
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={index.toString()}
      className={className}
      aria-current={aria}
      aria-label={label}
    ></button>
  );
});

export default function CrewPage() {
  return (
    <div className="crew-page container-fluid vh-100 d-flex pt-5">
      <div className="row w-100 mt-5 mt-lg-0 pt-5 mx-auto">
        <div id="carouselExampleIndicators" className="carousel slide px-0">
          <div className="carousel-indicators mb-5">{carouselIndicator}</div>
          <div className="carousel-inner h-100">
            {crewInfo.crew.map((crew, index) => {
              let className =
                index == 0
                  ? "carousel-item active h-100 "
                  : "carousel-item  h-100 ";
              return (
                <div className={className} key={index}>
                  <div className="row h-100">
                    <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center px-5">
                      <div className="d-flex flex-column align-items-center align-items-lg-start mb-5 pb-5">
                        <h1 className="text-white text-center mb-5 align-self-center align-self-lg-start">
                          <span className="text-secondary fw-bolder me-4">
                            02
                          </span>
                          MEET YOUR CREW
                        </h1>
                        <div className="col-12 col-lg-6 d-flex align-items-end justify-content-center d-sm-none d-md-none d-lg-none img-on-sm">
                          <img src={crew.images.png} alt="" />
                        </div>
                        <h2 className="mt-5 pt-5 text-center text-lg-start">
                          {crew.role}
                        </h2>
                        <h3 className="text-white mb-4 text-center text-lg-start">
                          {crew.name}
                        </h3>
                        <p className="text-center text-lg-start">{crew.bio}</p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 d-none align-items-end justify-content-center d-sm-flex d-md-flex d-lg-flex">
                      <img src={crew.images.png} alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
