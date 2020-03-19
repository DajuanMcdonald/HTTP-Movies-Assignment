import React, { Component } from 'react'
import axios from 'axios'

export class UpdateMovie extends Component {
    state = {
        metascore: 0,
        title: '',
        actor: '',
        director: '',
        stars: []


    }

    handleStars = () => {
        const {stars} = this.state
        stars.push(this.state.actor)
        this.setState({
            actor: '', stars
        });
    }

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleMovieSubmit = () => {
        const { stars, title, metascore, director } = this.state;
        const newMovie = { stars, title, metascore, director}
        const saveMovie = axios.post('http://localhost:3333/api/movies', newMovie)
        .then(res => {
            this.props.history.replace('/');
        })
        .catch(err => {
            console.log(err.response.status)
        })
    }
    render() {
        return (
            <div>
                <form>
                    <input onChange={this.handleInput}
                        name="title"
                        type="text"
                        value={this.state.title}
                    />

                    <input onChange={this.handleInput}
                        name="director"
                        value={this.state.director}
                        type="text"
                    />

                    <input onChange={this.handleInput}
                        name="actor"
                        type="text"
                        value={this.state.actor}
                    />

                    <input onChange={this.handleInput}
                        name="metascore"
                        value={this.state.metascore}
                        type="text"
                    />

                    
                </form>
            </div>
        )
    }
}

export default UpdateMovie
