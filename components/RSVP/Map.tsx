import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

export default function Map() {
  return (
    <div style={{ height: "200px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}` }}
        defaultCenter={{
          lat: 45.316497933255754,
          lng: -76.04941079364546,
        }}
        defaultZoom={11}
      />
    </div>
  );
}
