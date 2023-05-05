import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

const Allshows = () => {
  const [shows, setShows] = useState([]);
  const [summaryShow, setSummaryShow] = useContext(AppContext);

  useEffect(() => {
    async function getShows() {
      try {
        const { data } = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setShows(data);
      } catch (error) {
        console.error(error);
      }
    }
    getShows();
  }, []);

  return (
    <div className="container">
      <h2 className="text-warning m-5">All Shows</h2>
      <div className="row">
        {shows.map((show) => (
          <div className="col-md-3 mb-5" key={show.show.id}>
            <div className="p-3 border-warning border rounded">
              <img
                className="img-fluid rounded mb-3"
                src={show.show?.image?.medium}
                alt="img"
              />
              <h4>{show.show.name}</h4>
              <h6>Language : {show?.show?.language}</h6>
              <Link to="/summary">
                <button
                  className="btn btn-warning mt-3"
                  onClick={() => setSummaryShow(show.show)}
                >
                  Summary
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allshows;
