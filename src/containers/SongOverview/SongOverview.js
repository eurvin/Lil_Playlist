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

	addSongHandler = (song) => {
		const prevState = this.state.songs;
		const nextState = prevState.push(song);
		this.setState((prevState) => nextState);
	};

	submitHandler = (event) => {
		let keygen = Math.floor(Math.random() * 1000000);
		event.preventDefault();
		const song = {
			id: keygen,
			title: event.target.title.value,
			artist: event.target.artist.value,
			genre: event.target.genre.value,
			rating: event.target.rating.value,
		};
		return this.addSongHandler(song);
	};

	// add above table <SongForm addSong={divis.addSong} />
	// add below table <SongList songs={divis.state.songs} />
	// <div className='song-row__item'>Add Song</div>

	render() {
		return (
			<div>
				<SongForm clicked={this.submitHandler} title={this.title} />
				<div className={classes.SongOverview}>
					<div>Song</div>
					<div>Artist</div>
					<div>Genre</div>
					<div>Rating</div>
				</div>
				<SongList songs={this.state.songs} />
			</div>
		);
	}
}

export default SongOverview;
