import React, { Component, Fragment } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import {countries} from '../Constants';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchHikes } from '../.././actions/hikeActions';

class SearchHikes extends Component {
  state = {
    latitude: null,
    longitude: null,
    city: '',
    country: '',
    countryCode: '',
    maxResults: 15,
    maxDistance: 30,
  }

  handleChange = (e) => {
    if (e.target.name === "city") {       // sets city in string
      this.setState({ [e.target.name]: e.target.value })
    } else {
      this.setState({ [e.target.name]: +e.target.value }) //sets maxDistance in integer
    }
  }

  handleChangeCountry = (val) => {        // sets "country" and "countryCode"
    let countryCodes = countries;
    let index = Object.values(countryCodes).indexOf(val);
    let countryCode = Object.keys(countryCodes)[index];
    this.setState({ countryCode: countryCode, country: val })
  }

  getCoordinates= (e) => { //takes address input and converts it into coordinates via mapbox api
    e.preventDefault();
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.city}.json?country=${this.state.countryCode}&access_token=pk.eyJ1Ijoia3JpdGktcmFpIiwiYSI6ImNqdTY3dXA2djFncnY0M256eGVqNHA5bWUifQ.GmR07xGWG6xWmOMHPMLOJA`)
      .then(resp => {
        this.setState({
          longitude: resp.data.features[0].geometry.coordinates[0],
          latitude: resp.data.features[0].geometry.coordinates[1]
        })
        //calls fetchHikes to show response
        this.props.fetchHikes(this.state.latitude, this.state.longitude, this.state.maxDistance, this.state.maxResults)
      })
  }

  render() {
    return (
      <form onSubmit={ this.getCoordinates }>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">City</span>
          </div>
          <input className='form-control width100' placeholder="Enter a city..." type="text" name="city" value={ this.state.city } onChange={ this.handleChange }/>
          <div className="input-group-prepend">
            <span className="input-group-text">Country</span>
          </div>
          <CountryDropdown className='form-control width100' name="countryCode" value={ this.state.country } onChange={ (val) => this.handleChangeCountry(val)} />
          <div className="input-group-prepend">
            <span className="input-group-text">Max Distance</span>
          </div>
          <input className='form-control width100' placeholder="Enter max distance..." type="number" value={ this.state.maxDistance } name="maxDistance"  onChange={ this.handleChange }/>

          <span className="input-group-btn"><button className="btn btn-info" type="submit"><i className="fa fa-search"></i></button></span>
          </div>
      </form>
    )
  }
}

export default connect(null, { fetchHikes })(SearchHikes);
