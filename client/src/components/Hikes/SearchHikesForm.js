import React, { Component } from 'react';
import { CountryDropdown } from 'react-country-region-selector';

const SearchHikesForm = (props) => {
  return (
    <div className="search-hike-form" >
      <form onSubmit={ props.getCoordinates }>
        <div className="form-row">
          <div className="city-input">
            <input className='form-control' placeholder="City" type="text" name="city" value={ props.city } onChange={ props.handleChange }/>
          </div>
          <div className="country-input">
            <CountryDropdown className='form-control' name="countryCode" value={ props.country } onChange={ (val) => props.handleChangeCountry(val)} />
          </div>
          <div>
            <span className="input-group-text">Max Distance</span>
          </div>
          <div className="max-distance-input">
            <input className='form-control' type="number" value={ props.maxDistance } name="maxDistance"  onChange={ props.handleChange }/>
          </div>
          <span className="input-group-btn"><button className="search-button" type="submit"><i className="fa fa-search"></i></button></span>
        </div>
      </form>
    </div>
  )
}

export default SearchHikesForm;
