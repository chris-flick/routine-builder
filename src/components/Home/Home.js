import React from 'react';
import '@src/index.css';

import '@components/Home/Home.css';
import Auxiliary from '@hoc/Auxiliary/Auxiliary';
import Routine from '@components/Routine/Routine';

const Home = (props) => {
    const exercises = ['Bench', 'Squat']
    return (
        <Auxiliary>
            <h1>Home</h1>

            <Routine exercises={exercises}></Routine>
        </Auxiliary>
    );
};

export default Home;