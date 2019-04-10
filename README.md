# TRAILISTA

Trailista (*or Trail-lister*) is a WIP that uses [The Hiking Project Data API](https://www.hikingproject.com/data) to extract hiking trails based on user's location input.

As of now the available features are:

- **Locate trails by location (city and country)**
  <p align="center">
    <img width="460" height="300" alt-text="search" src="https://media.giphy.com/media/VGhqaaqcnNNfghL4P3/giphy.gif)">
  </p>

- **Login and Registration**
  <p align="center">
    <img width="460" height="300" alt-text="login" src="https://media.giphy.com/media/IdgJsLzXBbQza0nbdW/giphy.gif)">
  </p>

- **Logged in users can save trails to their favorites list**
  <p align="center">
    <img width="460" height="300" alt-text="favorite" src="https://media.giphy.com/media/XcRAxM6W0AM2h3mOXb/giphy.gif">
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


## Frameworks and Libraries Used

- Front-end: JavaScript libraries ([React](https://reactjs.org/), [Redux](https://redux.js.org/))
- [Redux Thunk middleware](https://github.com/reduxjs/redux-thunk)
- Back-end: [Ruby on Rails](https://github.com/rails/rails)
- [Hiking Project Data API](https://www.hikingproject.com/data)
- [Mapbox API](https://docs.mapbox.com/api/search/#geocoding)
- [Bootstrap](https://getbootstrap.com/)
- [Axios](https://github.com/axios/axios)


## Author

- [Kriti Rai](https://github.com/kriti-rai)


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/kriti-rai/trailista.git. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.


## License

All software is available as open source under the terms of the [MIT License](https://github.com/kriti-rai/trailista/blob/master/LICENSE.md).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
