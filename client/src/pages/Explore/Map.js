import { useMemo, useState, useEffect, useCallback } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
// import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import mapStyles from "./mapStyles";
import locations from "./Locations.js";

const Map = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState(null);
  //   const onLoad = useCallback((map) => addMarkers(map), []);

  useEffect(() => setIsMounted(true), []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
    libraries: ["places"],
  });

  const center = useMemo(() => ({ lat: 45.50169, lng: -73.567253 }), []);
  const options = {
    styles: mapStyles,
  };

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <GoogleMap
        zoom={12}
        center={center}
        options={options}
        mapContainerStyle={{
          margin: "50px 50px 50px 50px",
          height: "100vh",
          width: "150vh",
        }}
      >
        {locations.map((location) => {
          return (
            <Marker
              key={location.venue}
              position={{ lat: location.lat, lng: location.lng }}
              onClick={() => {
                setSelectedVenue(location);
              }}
            />
          );
        })}

        {selectedVenue && (
          <InfoWindow
            position={{ lat: selectedVenue.lat, lng: selectedVenue.lng }}
            onCloseClick={() => {
              setSelectedVenue(null);
            }}
          >
            <div>{selectedVenue.venue}</div>
          </InfoWindow>
        )}
      </GoogleMap>
    </>
  );
};

export default Map;
