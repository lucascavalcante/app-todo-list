import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div>
        <div className='todoForm' role='form'>
            <Grid cols='12 9 10'>
                <input id='description'
                    className='form-control'
                    placeholder='Add a task here'
                    onChange={props.handleChange}
                    value={props.description} />
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
            </Grid>
        </div>
    </div>
)