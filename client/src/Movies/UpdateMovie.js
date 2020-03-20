import React from 'react'
import axios from 'axios'


function UpdateMovie(props) {
    const {id} = props.match.params
    const initialValues = {id:"", title:"", director:"", metascore:"", stars:[]}
    const [movie, setMovie] = React.useState(initialValues)

    React.useEffect(() => {
        axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then( res => {
            setMovie(res.data)
        })

    },[id])

    const handleChange = e => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }

    const updateStars = e => {
        setMovie({
            ...movie,
            stars: [e.target.value]
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios
        .put(`http://localhost:5000/api/movies/${id}`, movie)
        .then(res => {
            setMovie(initialValues)
            props.history.push('/')
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={movie.title} onChange={handleChange}/>

                <label>Director:</label>
                <input type="text" name="director" value={movie.director} onChange={handleChange}/>

                <button>Update</button>

            </form>
            
        </div>
    )
}

export default UpdateMovie
