import React, { Component } from 'react';

import axios from 'axios';
import _ from 'lodash';

import './styles/main.scss';
import rndBtn from './assets/rndBtn.svg';

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            searchField: "",
            pokemon: {
                name: "",
                id: "",
                type: "",
                frontSpriteFemale: ""
            }
        };

        this.getRandPoke = this.getRandPoke.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.searchPoke = this.searchPoke.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon/1/').then(res => {
            console.log(res.data)
            this.setState({
                id: res.data.id,
                name: _.upperFirst(res.data.name),
                type: res.data.types,
                frontSpriteMale: res.data.sprites.front_default,
            })
        })
    }

    handleChange(event) {
        this.setState({
            searchField: event.target.value
        })
        console.log(event.target.value)
    }

    //Currently not working
    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.setState({
                searchField: event.target.value
            })
            console.log("Hit Enter")
        }
    }

    async searchPoke() {
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.searchField.toLowerCase()}/`).catch(err => console.error(err))
        this.setState({
            id: res.data.id,
            name: _.upperFirst(res.data.name),
            type: res.data.types,
            frontSpriteMale: res.data.sprites.front_default,
            searchField: ""
        })
        console.log("ID:", res.data.id)
        console.log("Name:", _.upperFirst(res.data.name))
        for (let i = 0; i < res.data.types.length; i++) {
            console.log(`Type ${i + 1}:`, _.upperFirst(res.data.types[i].type.name))
        }
    }

    async getRandPoke() {
        var rand = Math.floor(Math.random() * Math.floor(807));
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rand}/`).catch(err => console.error(err))
        console.log("ID:", res.data.id)
        console.log("Name:", _.upperFirst(res.data.name))
        for (let i = 0; i < res.data.types.length; i++) {
            console.log(`Type ${i + 1}:`, _.upperFirst(res.data.types[i].type.name))
        }
        this.setState({
            id: res.data.id,
            name: _.upperFirst(res.data.name),
            type: res.data.types,
            frontSpriteMale: res.data.sprites.front_default,
        })
    }
    render() {
        return (
            <div className='navbar'>
                <div id="search-container">
                    <input placeholder="Search Pokémon..." onChange={this.handleChange} onKeyPress={this.handleKeyPress} value={this.state.searchField} />
                    
                    <button id="search-button" onClick={this.searchPoke}>Search</button>

                    <img src="./assets/rndBtn.svg" id="random-search" onClick={this.getRandPoke} />
                    
                </div>
            </div>
        );
    }
}