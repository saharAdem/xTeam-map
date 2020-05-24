import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Rating from 'react-rating'

import { addLocation } from '../../store/actions/marketsLocations'
import Logo from '../../assets/logo.png'
import GoogleIcon from '../../assets/google-maps.svg'
import {
  Container,
  Markets,
  Title,
  Market,
  Name,
  Address,
  MarketLogo,
  Info,
  RatingIcon,
  RatingContainer,
  Rate,
  GoogleMap
} from './ClosestMarkets.style'

class ClosestMarkets extends Component {
  addMarketLocation = () => {
    this.props.markets.map(market => {
      this.props.addLocation({
        lng: market.address_longitude,
        lat: market.address_latitude
      })
    })
    this.props.history.push('/markets-map')
  }

  render() {
    return (
      <Container>
        <Title>Closest Markets</Title>
        <Markets>
          {this.props.markets.map((market, index) => (
            <Market key={index}>
              <MarketLogo src={Logo} alt="logo" />
              <Info>
                <Name>{market.name}</Name>
                <Address>{market.address}</Address>
                <RatingContainer>
                  <Rating
                    initialRating={market.rate}
                    emptySymbol={
                      <RatingIcon
                        style={{
                          backgroundColor: '#FFF',
                          border: 'solid #ccc 1PX'
                        }}
                      />
                    }
                    fullSymbol={[1, 2, 3, 4, 5].map(n => (
                      <RatingIcon />
                    ))}
                    readonly
                  />
                  {/* <Rate>rate</Rate> */}
                </RatingContainer>
              </Info>
            </Market>
          ))}
        </Markets>

        <GoogleMap
          src={GoogleIcon}
          alt="map"
          onClick={this.addMarketLocation}
        />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    markets: state.markets.markets
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addLocation }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ClosestMarkets)
