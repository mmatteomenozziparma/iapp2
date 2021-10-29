import React, { useState, useEffect } from 'react';
import Geocode from 'react-geocode';
import indirizzi from '.../componenti/indirizzi.js';
export default function FindLatLong () {

  Geocode.setApiKey(''); //Insert your Google Maps API here
  Geocode.enableDebug();

  var address = this.props.indirizzo;

  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)

  useEffect(() => {
    Geocode.fromAddress(address).then(
      response => {
        setLat(response.results[0].geometry.location.lat);
        setLong(response.results[0].geometry.location.lng);
      }
    )}, []
  )

  return(
    <div>
      <p>Address: {address}</p>
      <p>Lat: {lat}</p>
      <p>long: {long}</p>
    </div>
  )
}
