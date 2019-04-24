import React, { Component } from 'react';
import { CountryDropdown } from 'react-country-region-selector';

const SearchHikesForm = (props) => {
  return (
    <div className="search-hike-form" >
      <form onSubmit={ props.getCoordinates }>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">City</span>
          </div>
          <input className='form-control width100' placeholder="Enter a city..." type="text" name="city" value={ props.city } onChange={ props.handleChange }/>
          <div className="input-group-prepend">
            <span className="input-group-text">Country</span>
          </div>
          <CountryDropdown className='form-control width100' name="countryCode" value={ props.country } onChange={ (val) => props.handleChangeCountry(val)} />
          <div className="input-group-prepend">
            <span className="input-group-text">Max Distance</span>
          </div>
          <input className='form-control width100' placeholder="Enter max distance..." type="number" value={ props.maxDistance } name="maxDistance"  onChange={ props.handleChange }/>

          <span className="input-group-btn"><button className="btn btn-info" type="submit"><i className="fa fa-search"></i></button></span>
          </div>
      </form>
    </div>
  )
}

export default SearchHikesForm;
