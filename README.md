# TRAILISTA

Trailista (*or Trail-lister*) is a WIP that uses [The Hiking Project Data API](https://www.hikingproject.com/data) to extract hiking trails based on user's location input.

## Demo

https://trailista.herokuapp.com/
Login with the following:
Username: krai
Password: 123456

## Features

- **Locate trails by location (city and country)**
  <p align="left">
    <img width="460" height="300" alt-text="search" src="https://media.giphy.com/media/lrbwszQmty9ybUdBQs/giphy.gif">
  </p>

- **Login and Registration**
  <p align="left">
    <img width="460" height="300" alt-text="login" src="https://media.giphy.com/media/j0verhIyrSczORIdK0/giphy.gif">
  </p>

- **Logged in users can save trails to their favorites list**
  <p align="left">
    <img width="460" height="300" alt-text="favorite" src="https://media.giphy.com/media/mDXrTRqf6EMfTAyNat/giphy.gif">
  </p>


## Installation:

 Assuming you have Ruby, Rails and Node.js installed,

- Fork and clone this repo
- From the root directory:
  - Run `$ bundle install`   
  - Run `$ rake db:migrate`
- `cd` into the client directory
  - Run `npm install`
- Go back to the root directory and run `rake start`


## Technologies and Resources

- Front-end: JavaScript libraries ([React](https://reactjs.org/), [Redux](https://redux.js.org/))
- [Redux Thunk middleware](https://github.com/reduxjs/redux-thunk)
- Back-end: [Ruby on Rails](https://github.com/rails/rails)
- [Hiking Project Data API](https://www.hikingproject.com/data)
- [Mapbox API](https://docs.mapbox.com/api/search/#geocoding)
- [Bootstrap](https://getbootstrap.com/)
- [Axios](https://github.com/axios/axios)
- [Unsplash](https://unsplash.com) for background images


## Author

- [Kriti Rai](https://github.com/kriti-rai)

## Blog Post
  [1](https://dev.to/kritirai/my-react-redux-portfolio-project-2h4k) and [2](http://icodeyounot.com/react_redux_portfolio_project)


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/kriti-rai/trailista.git. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.


## License

All software is available as open source under the terms of the [MIT License](https://github.com/kriti-rai/trailista/blob/master/LICENSE.md).
