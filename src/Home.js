import ShipList from "./ShipList";
import useFetch from "./useFetch";
import { useState } from "react";
import "./Home.css";

// Start of -- Starfield background
// Sets the number of stars we wish to display
const numStars = 100;

// For every star we want to display
for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");
  star.className = "star";
  var xy = getRandomPosition();
  star.style.top = xy[0] + "px";
  star.style.left = xy[1] + "px";
  document.body.append(star);
}

// Gets random x, y values based on the size of the container
function getRandomPosition() {
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random() * x);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}
// End of -- Starfield background

const Home = () => {
  const [megalights, setMegalights] = useState("");
  const [compute, setCompute] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompute(true);
  };

  const { data: starships, error } = useFetch(
    "https://swapi.dev/api/starships/"
  );

  return (
    <div className="home">
      <div className="custom-input-box">
        <form onSubmit={handleSubmit}>
          <label>Travel distance in Megalights:</label>
          <input
            type="number"
            required
            value={megalights}
            onChange={(e) => setMegalights(e.target.value)}
          />
          <button>Compute</button>
          <div className="compute-subtitle">
            How many times the Spaceship has to stop:
          </div>
        </form>
      </div>
      {error && <div>{error}</div>}
      {compute && (
        <ShipList starships={starships} travelDistance={megalights} />
      )}
    </div>
  );
};

export default Home;
