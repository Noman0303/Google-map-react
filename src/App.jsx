import GoogleMapReact from 'google-map-react';
import './App.css'
import { googleAPIKey } from './GoogleAPIKey';
import { FaMapMarkerAlt } from "react-icons/fa";


const AnyReactComponent = ({ text }) => <div style={{color:'red'}} ><FaMapMarkerAlt></FaMapMarkerAlt></div>;

function App() {

  const defaultProps = {
    center: {
      lat: 23.8041,
      lng: 90.4152
    },
    zoom: 14
  };

  return (
    <div style={{ height: '500px', width: '500px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleAPIKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  )
}

export default App
