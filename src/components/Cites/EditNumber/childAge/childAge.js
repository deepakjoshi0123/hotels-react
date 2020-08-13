import React from "react";

const childAge = () => {
  return (
    <div>
      <label for="Age">Age</label>
      <select id="age" name="age">
        <option value="2">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="aud">4</option>
        <option value="2">5</option>
        <option value="3">6</option>
        <option value="aud">7</option>
        <option value="2">8</option>
        <option value="3">9</option>
        <option value="aud">10</option>
        <option value="2">11</option>
      </select>
    </div>
  );
};

export default childAge;
