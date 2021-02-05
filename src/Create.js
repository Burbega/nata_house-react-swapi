import { useState } from "react";
import './Create.css';

const Create = () => {
  const [megalights, setMegalights] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const travelDistance = megalights;

    console.log(travelDistance);
    this.props.onHandleSubmit(travelDistance);
    
     
  }

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>Travel distance in Megalights:</label>
        <input 
          type="text" 
          required 
          value={megalights}
          onChange={(e) => setMegalights(e.target.value)}
        />
        <button>Compute</button>
        <h2>{ megalights }</h2>
      </form>
    </div>
  );
}
 
export default Create;