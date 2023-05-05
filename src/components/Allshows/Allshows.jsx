import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

const Allshows = () => {
  const [shows, setShows] = useState([]);
  const [s, setS] = useContext(AppContext);

  useEffect(() => {
    async function getShows() {
      try {
        const { data } = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setShows(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    getShows();
  }, []);
  console.log(s);
  //   useEffect(() => {
  //     async function getShows() {
  //       try {
  //         const { data } = await axios.get(
  //           "https://api.tvmaze.com/search/shows?q=All%20American"
  //         );
  //         setSh(data);
  //         console.log(data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //     getShows();
  //   }, []);

  return (
    <div className="container">
      <div className="row">
        {shows.map((show) => (
          <div className="col-md-3 mb-5" key={show.show.id}>
            <div className="p-3">
              <img
                className="img-fluid"
                src={show.show?.image?.medium}
                alt="img"
              />
              <h4>{show.show.name}</h4>
              <Link to="/summary">
                <button onClick={() => setS(show.show)}>Summary</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allshows;
