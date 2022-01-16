import React from "react";
import Form1 from "./Form";
import Map from "./Map";

export default function RSVP() {
  return (
    <div>
      <div>
        <h1 className="font-serif text-2xl">
          RSV<span className="text-gem">P</span>
        </h1>
        <div className="bg-slate-200">
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
        <Map />
      </div>
      <div>
        <Form1 />
      </div>
    </div>
  );
}
