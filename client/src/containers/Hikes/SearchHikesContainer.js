import React, { Component, Fragment } from 'react';
import {countries} from '../.././components/Constants';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchHikes } from '../.././actions/hikeActions';
import SearchHikes from '../.././components/Hikes/SearchHikes';

class SearchHikesContainer extends Component {
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
    if (e.target.name === "city") {       // sets city as a string
      this.setState({ [e.target.name]: e.target.value })
    } else {
      this.setState({ [e.target.name]: +e.target.value }) //sets maxDistance as an integer
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
      <>
        <SearchHikes country={ this.state.country } maxDistance={ this.state.maxDistance } getCoordinates={ this.getCoordinates } handleChange={ this.handleChange } handleChangeCountry={ this.handleChangeCountry }/>
      </>
    )
  }
}

export default connect(null, { fetchHikes })(SearchHikesContainer);
