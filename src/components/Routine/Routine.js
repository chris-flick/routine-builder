import React from 'react';
import '@src/index.css';
import { v4 as uuid } from 'uuid';

import Card from '@material-ui/core/Card';

import '@components/Routine/Routine.css';
import Auxiliary from '@hoc/Auxiliary/Auxiliary';
import Exercise from '@components/Exercise/Exercise';

class Routine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            exercises: this.props.exercises
        };
    }

    render() {
        let routine = [];
        for (let i = 0; i < this.state.exercises.length; i++) {
            const exercise = this.state.exercises[i];
            const key = uuid();
            const exerciseElement = <Exercise key={key} className='pb-1' exercise={exercise}></Exercise>;
            routine.push(exerciseElement);

            if (i !== this.state.exercises.length - 1) {
                routine.push(<hr className='divider' />);
            }
        }
        
        return (
            <Auxiliary>
                <Card className='Card' raised>
                    {routine}
                </Card>
            </Auxiliary>
        );
    }
}

export default Routine;