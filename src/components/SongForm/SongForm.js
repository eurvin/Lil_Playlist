import React from 'react';
import classes from './SongForm.module.css';

const SongForm = (props) => (
	<React.Fragment>
		<div className={classes.SongForm}>
			<form onSubmit={props.clicked}>
				<div>
					<label htmlFor='title'>
						Title:
						<input type='text' placeholder='Song Title' name='title' />
					</label>
				</div>
				<div>
					<label htmlFor='artist'>
						Artist:
						<input type='text' placeholder='Artist Name' name='artist' />
					</label>
				</div>
				<div>
					<label htmlFor='genre'>
						Genre:
						<select name='genre'>
							<option value='R&B'>R&B</option>
							<option value='HipHop'>HipHop</option>
							<option value='Pop'>Pop</option>
							<option value='Soul'>Soul</option>
						</select>
					</label>
				</div>
				<div>
					<label htmlFor='rating'>
						Rating:
						<select name='rating'>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
						</select>
					</label>
				</div>
				<div>
					<input type='submit' value='Add Song' />
				</div>
			</form>
		</div>
	</React.Fragment>
);

export default SongForm;
