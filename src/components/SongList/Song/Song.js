import React from 'react';
import classes from './Song.module.css';

const song = (props) => {
	let songList = [...props.songs];

	let list = songList.map((song) => {
		return (
			<div key={song.id} className={classes.Song}>
				<div>{song.title}</div>
				<div>{song.artist}</div>
				<div>{song.genre}</div>
				<div>{song.rating}</div>
				<button type='submit' value={song.id} onClick={props.delete}>
					DELETE
				</button>
			</div>
		);
	});
	return list;
};

export default song;
