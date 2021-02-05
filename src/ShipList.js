import "./ShipList.css";

const ShipList = ({ starships, travelDistance }) => {
  return (
    <div className="origin">
      <div className="wrapper">
        <div className="scroll-text">
          {starships.results.map((starship) => (
            <div key={starship.name}>
              <h2>
                {starship.consumables.includes("year") &&
                  starship.name +
                    ": " +
                    Math.floor(
                      travelDistance /
                        starship.MGLT /
                        (starship.consumables.match(/\d+/)[0] * 8064)
                    )}
              </h2>

              <h2>
                {starship.consumables.includes("month") &&
                  starship.name +
                    ": " +
                    Math.floor(
                      travelDistance /
                        starship.MGLT /
                        (starship.consumables.match(/\d+/)[0] * 672)
                    )}
              </h2>

              <h2>
                {starship.consumables.includes("week") &&
                  starship.name +
                    ": " +
                    Math.floor(
                      travelDistance /
                        starship.MGLT /
                        (starship.consumables.match(/\d+/)[0] * 168)
                    )}
              </h2>

              <h2>
                {starship.consumables.includes("day") &&
                  starship.name +
                    ": " +
                    Math.floor(
                      travelDistance /
                        starship.MGLT /
                        (starship.consumables.match(/\d+/)[0] * 24)
                    )}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShipList;
