"use client";
import React, { useState, useCallback } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Navbar from "@/components/navbar";
import Map from "@/components/map";  // Assuming this component exists and handles some map-related features

const mapContainerStyle = {
  width: "100%",
  height: "900px",
};

const center = {
  lat: -1.977247,  // Latitude for Lake Kivu or any preferred location
  lng: 29.365722,  // Longitude for Lake Kivu
};

const Locationpage = () => {
  const [markers, setMarkers] = useState([{ lat: -1.977247, lng: 29.365722 }]);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  const handleMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng?.lat() || 0,
        lng: event.latLng?.lng() || 0,
      },
    ]);
  }, []);

  return (
    <div className="flex py-20 ">
      <div className="flex flex-col gap-5 w-full overflow-hidden z-">
        <div className="relative top-0">
          <div className="sticky top-0">
            <Navbar title="Location" />
          </div>
        </div>

        <LoadScript googleMapsClientId={apiKey}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={100}
            onClick={handleMapClick}
          >
            {markers.map((marker, index) => (
              <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
            ))}
          </GoogleMap>
        </LoadScript>

        {/* Assuming your Map component does something else */}
        <Map />
      </div>
    </div>
  );
};

export default Locationpage;
