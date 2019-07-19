import React, { Component } from 'react';

import axios from 'axios';
import _ from 'lodash';

//Images and assets
import './styles/main.scss';
import logo from './assets/logo.svg';
import rndButn from './assets/rndBtn.svg';

import Navbar from './navbar.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar/>

        <div className="Banner-section">

          <div className="Pokedex-logo">
            <img style={{ height: "10vh" }} src={logo} alt="Pokedex" />
            <div id="credit">
              <a
                style={{
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  alignItems: "center"
                }}
                href="https://pokeapi.co/"
                title="https://pokeapi.co/"
              >
                Powered By <br /> The PokéAPI
            </a>
            </div>
          </div>

          <div className="Banner-text">
            This is just a simple pokedex app
            to veiw all of your favorite Pokemon.
            If you want to get started right away 
            use the search bar above, 
            or be suprised with a random pokemon 
            with the button down below, or just 
            scroll to your hearts content.
          </div>

          <img src="/assets/rndBtn.svg" />

        </div>
      </div>
    );
  }
}
