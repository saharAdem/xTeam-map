import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import GoogleMapComponent from '../GoogleMap'
import { addMarket } from '../../store/actions/markets'
import { InputContainer, Input, ReisterButton, Screen } from './signup.style'

class Signup extends Component {
  state = {
    mobile: '',
    name: '',
    password: '',
    userLocation: {}
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords

      this.setState({
        userLocation: { lat: latitude, lng: longitude }
      })
    })
  }

  pressButton = event => {
    event.preventDefault()
    const { name, password, mobile, userLocation } = this.state
    if (password.length < 6) alert('password length must be higher than 6 ')
    else if (name.length < 3) {
      alert('name length must be higher than 2 ')
    } else if (mobile.length < 6) {
      alert('mobile number length must be higher than 6 ')
    } else {
      userLocation &&
        axios
          .post('https://joodya.com/hesab/public/api/xteam_test', {
            name,
            password,
            mobile,
            address_longitude: userLocation.lng,
            address_latitude: userLocation.lat
          })
          .then(result => {
            this.props.addMarket(result.data.markets)
            this.props.history.push('/markets')
          })
          .catch(error => console.log(error))
    }
  }

  render() {
    const { mobile, name, password, userLocation } = this.state
    return (
      <Screen>
        <InputContainer>
          <Input
            type="tel"
            pattern="[0-9]{5}-[0-9]{9}"
            placeholder="Mobile"
            value={mobile}
            onChange={event => this.setState({ mobile: event.target.value })}
          />
          <Input
            placeholder="Name"
            value={name}
            onChange={event => this.setState({ name: event.target.value })}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={event => this.setState({ password: event.target.value })}
          />
        </InputContainer>
        {userLocation && (
          <GoogleMapComponent
            userLocation={userLocation ? this.state.userLocation : ''}
            margin_top="10px"
          />
        )}
        <ReisterButton onClick={this.pressButton}>Register</ReisterButton>
      </Screen>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addMarket }, dispatch)
}

export default connect(null, mapDispatchToProps)(Signup)
