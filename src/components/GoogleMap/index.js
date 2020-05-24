import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from 'react-google-maps'

import {
  MapContainer,
  LodingElement,
  ContainerElement,
  MapElement
} from './Map.style'

const Map = props => {
  const mapOptions = {
    disableDefaultUI: true
  }
  return (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{
        lat: 31.898043,
        lng: 35.204269
      }}
      options={mapOptions}
    >
      {props.userLocation ? (
        <Marker
          position={{
            lat: props.userLocation.lat,
            lng: props.userLocation.lng
          }}
        />
      ) : (
        props.locations &&
        props.locations.map((market, index) => {
          {
            return (
              <Marker
                key={index}
                position={{
                  lat: parseFloat(market.lat),
                  lng: parseFloat(market.lng)
                }}
              />
            )
          }
        })
      )}
    </GoogleMap>
  )
}

const MapWrapped = withScriptjs(withGoogleMap(Map))

const GoogleMapSignup = props => (
  <MapContainer height={props.locations.length > 0 ? '100%' : ''}>
    <MapWrapped
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDAO1iIgGr9rxiRYGJpfzORd0DHibssXzo`}
      loadingElement={<LodingElement />}
      containerElement={<ContainerElement />}
      mapElement={
        <MapElement
          height={props.locations.length > 0 ? '100%' : '200px'}
          margin_top={props.locations.length > 0 ? '0' : '32px'}
        />
      }
      userLocation={props.userLocation}
      locations={props.locations}
    />
  </MapContainer>
)

const mapStateToProps = state => {
  return {
    locations: state.marketsLocations.marketsLocations
  }
}

export default connect(mapStateToProps)(GoogleMapSignup)
