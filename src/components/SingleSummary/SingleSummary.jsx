import React, { useContext } from "react";
import { AppContext } from "../../App";
import ReactJsxParser from "react-jsx-parser";

const SingleSummary = () => {
  const [s, setS] = useContext(AppContext);

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
      <ReactJsxParser jsx={s?.summary} />
      {/* <button>Book This Movie</button> */}
      {/* <p >{ReactHtmlParser(s?.summary)}</p> */}

      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Book This Movie
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Movie Booking
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form action="" onSubmit={handleBooking}>
                <input
                  className="form-control mb-3"
                  type="text"
                  name="movieName"
                  value={s?.name}
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
                {/* <input type="submit" value="sdgfgh" /> */}
                <input
                  type="submit"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                  value="Book This Movie"
                  // onClick={handleBooking}
                />
                {/* Save changes
                </button> */}
              </form>
            </div>
            {/* <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                // onClick={handleBooking}
              >
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSummary;
