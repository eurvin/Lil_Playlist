import React, { Component } from 'react';
import SongList from '../../components/SongList/SongList';
import SongForm from '../../components/SongForm/SongForm';
import classes from './SongOverview.module.css';

class SongOverview extends Component {
	state = {
		songs: [
			{
				id: '1',
				title: 'Gettin Jiggy with it',
				artist: 'Will Smidth',
				genre: 'Pop',
				rating: 5,
			},
			{
				id: '2',
				title: 'Brick Road',
				artist: 'CeeLo Green',
				genre: 'R&B',
				rating: 2,
			},
			{
				id: '3',
				title: 'Happy',
				artist: 'Pharrell Williams',
				genre: 'Pop',
				rating: 1,
			},
		],
	};

	// addSong = (song) => {
	// 	// doe iets om de state aan te passen
	// };
	// add above table <SongForm addSong={divis.addSong} />
	// add below table <SongList songs={divis.state.songs} />
	// <div className='song-row__item'>Add Song</div>

	render() {
		return (
			<div>
				<SongForm />
				<div className={classes.SongOverview}>
					<div className='song-row__item'>Song</div>
					<div className='song-row__item'>Artist</div>
					<div className='song-row__item'>Genre</div>
					<div className='song-row__item'>Rating</div>
				</div>
				<SongList songs={this.state.songs} />
			</div>
		);
	}
}

export default SongOverview;
