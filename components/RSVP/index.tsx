import React from "react";

export default function RSVP() {
  return (
    <div>
      <div>
        <h1>RSVP</h1>
        <div>
          <p>Date</p>
          <p>July 22 2022</p>
        </div>
        <div>
          <p>Time</p>
          <p>5pm</p>
        </div>
        <div>
          <p>Venue</p>
          <p>Auqatopia</p>
        </div>
      </div>
      <div>
        <form>
          <label>
            Name:
            <input name="submitted-name"></input>
          </label>
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}
