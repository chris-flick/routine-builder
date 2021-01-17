import React from 'react';
import '@src/index.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import '@components/Exercise/Exercise.css';

class Exercise extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            className: this.props.className,
            exercise: this.props.exercise,
            sets: []
        };
    }

    render() {
        return (
            <div className={this.props.className + ' Card-Content'}>
                <div>
                    {this.props.exercise}: 135x8/8/8, 155x4
                </div>
                <div className='flex'>
                    <TextField className='mr-1' label='Weight'></TextField>
                    <span className='x-span mr-1'>x</span>
                    <TextField className='mr-1' label='Reps'></TextField>
                    <Button variant='contained' color='primary' size='small'>Add</Button>
                </div>
            </div>
        );
    }
}

export default Exercise;