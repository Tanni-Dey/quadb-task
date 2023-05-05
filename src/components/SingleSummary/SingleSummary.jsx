import React, { useContext } from "react";
import { AppContext } from "../../App";
import ReactJsxParser from "react-jsx-parser";

const SingleSummary = () => {
  const [summaryShow, setSummaryShow] = useContext(AppContext);

  const handleBooking = (e) => {
    e.preventDefault();
    const userDetails = {
      movie: e.target.movieName.value,
      userName: e.target.user.value,
      userPhone: e.target.phone.value,
    };
    console.log(userDetails);
    localStorage.setItem("details", JSON.stringify(userDetails));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5 m-5 p-5 border border-warning rounded">
          <h4 className="text-warning mb-3">
            Summary of {summaryShow?.name} Movie
          </h4>
          <ReactJsxParser jsx={summaryShow?.summary} />
          <button
            type="button"
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Book This Movie
          </button>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Movie Booking
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="" onSubmit={handleBooking}>
                <input
                  className="form-control mb-3"
                  type="text"
                  name="movieName"
                  value={summaryShow?.name}
                  required
                  placeholder="Enter Movie Name"
                />
                <input
                  className="form-control mb-3"
                  type="text"
                  required
                  name="user"
                  placeholder="Enter Your Name"
                />
                <input
                  className="form-control mb-3"
                  required
                  type="number"
                  name="phone"
                  placeholder="Enter Your Phone number"
                />
                <input
                  type="submit"
                  className="btn btn-warning"
                  data-bs-dismiss="modal"
                  value="Book This Movie"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSummary;
