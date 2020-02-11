/* import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps' */
/* import MapComponent from './MapComponent'

class MapView extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentLatLng: {
        lat: 0,
        lng: 0
      },
      isMarkerShown: false
    }
  }

  componentWizllUpdate(){
    this.getGeoLocation()
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.getGeoLocation()
      this.setState({ isMarkerShown: true })
    }, 5000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  getGeoLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position.coords);
                this.setState(prevState => ({
                    currentLatLng: {
                        ...prevState.currentLatLng,
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                }))
            }
        )
    } 
}

  render() {
    return (
      <MapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        currentLocation={this.state.currentLatLng}
      />
    )
  }
}

export default MapView; */

import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react';

const SimpleMap = (center) => {

return (
    // Important! Always set the container height explicitly
    
    <div style={{ height: '100%', width: '100%' }}>
        {console.log(center)}
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAObjwKwsn3gcQs7QxH8OGwqjK4erKJMCA' }}
        center={center}
        zoom={16}
      >
      </GoogleMapReact>
    </div>
  );

}
 
/* class SimpleMap extends Component {

    
    render() {
        console.log(this.props);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAObjwKwsn3gcQs7QxH8OGwqjK4erKJMCA' }}
          defaultCenter={this.props.center}
          defaultZoom={16}
        >
        </GoogleMapReact>
      </div>
    );
  }
} */
 
export default SimpleMap;