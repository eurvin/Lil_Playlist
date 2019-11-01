import React from 'react';
import classes from './SongForm.module.css';

const SongForm = (props) => (
	<div className={classes.SongForm}>
		<div>
			<input type='text' placeholder='Song Title'></input>
		</div>
		<div>
			<input type='text' placeholder='Artist Name'></input>
		</div>
		<div>
			<select name='Genre'>
				<option value='R&B'>R&B</option>
				<option value='HipHop'>HipHop</option>
				<option value='Pop'>Pop</option>
				<option value='Soul'>Soul</option>
			</select>
		</div>
		<div>
			<select name='Rating'>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
				<option value='5'>5</option>
			</select>
		</div>
		<div>
			<button onClick={props.clicked}>Add Song</button>
		</div>
	</div>
);

export default SongForm;
