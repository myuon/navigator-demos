import { useState } from "react";

export const Geolocation: React.FC = () => {
  const [position, setPosition] = useState<GeolocationPosition>();
  const [watchId, setWatchId] = useState<number>();

  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigator.geolocation.getCurrentPosition((position) => {
              console.log(position);
              setPosition(position);
            });
          }}
        >
          Get Geolocation
        </button>

        <ul>
          <li>Timestamp: {position?.timestamp}</li>
          <li>Latitude: {position?.coords.latitude}</li>
          <li>Longitude: {position?.coords.longitude}</li>
          <li>Accuracy: {position?.coords.accuracy}</li>
        </ul>

        <p>{JSON.stringify(position?.toJSON())}</p>
      </div>
      <div>
        <button
          onClick={() => {
            const id = navigator.geolocation.watchPosition((position) => {
              console.log(position);
              setPosition(position);
            });
            setWatchId(id);
          }}
        >
          Watch Geolocation
        </button>
        <button
          onClick={() => {
            if (watchId) {
              navigator.geolocation.clearWatch(watchId);
              setWatchId(undefined);
            }
          }}
        >
          Clear Watch
        </button>

        <p>WatcherId: {watchId}</p>
      </div>
    </div>
  );
};
