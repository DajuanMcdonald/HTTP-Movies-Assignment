import React from 'react';
import Loader from 'react-loader-spinner';

const UpdateMovie = () => {
    return (

    <div>
        <form>
            <div
                onClick={console.log('Updating...')}
                style={{color: 'white', width: '20rem', height: '20vh', borderRadius: '2px', backgroundColor: 'blue'}}>
                Update Movie
            </div>
        </form>
    </div>
    )

}

export default UpdateMovie;
