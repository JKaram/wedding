import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { LocationMarkerIcon } from "@heroicons/react/solid";

const AnyReactComponent = ({ text }: any) => (
  <div className="w-5 hover:text-yellow-500">
    <LocationMarkerIcon className="h-5 w-5" />
    <span>{text}</span>
  </div>
);

export default function Map() {
  return (
    <div style={{ height: "200px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}` }}
        defaultCenter={{
          lat: 45.316497933255754,
          lng: -76.04941079364546,
        }}
        defaultZoom={15}
      >
        <AnyReactComponent lat={45.316497933255754} lng={-76.04941079364546} text="Auquatopia" />
      </GoogleMapReact>
    </div>
  );
}
