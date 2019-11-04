import React, { Component } from 'react';
import SongList from '../../components/SongList/SongList';
import SongForm from '../../components/SongForm/SongForm';
import classes from './SongOverview.module.css';
import axios from '../../axios';

class SongOverview extends Component {
	state = {
		songs: [],
	};

	stateUpdateHandler = (newState) => {
		this.setState({ songs: newState });
	};

	getServerState = () => {
		axios
			.get(`songs.json`)
			.then((res) => {
				const songs = Object.keys(res.data).map((key) => {
					let data = res.data[key];
					data.id = key;
					return data;
				});
				this.stateUpdateHandler(songs);
			})
			.catch((error) => console.log(error));
	};

	componentDidMount() {
		this.getServerState();
	}

	addSongHandler = (song) => {
		axios
			.post(`songs.json`, song)
			.then((res) => {
				song.id = res.data.name;
				const prevState = [...this.state.songs];
				const nextState = prevState.concat(song);
				return this.stateUpdateHandler(nextState);
			})
			.catch((error) => console.log(error));
	};

	submitHandler = (event) => {
		event.preventDefault();
		const song = {
			artist: event.target.artist.value,
			genre: event.target.genre.value,
			rating: event.target.rating.value,
			title: event.target.title.value,
		};
		return this.addSongHandler(song);
	};

	deleteSongHandler = (event) => {
		const song = event.target.value;
		axios
			.delete(`/songs/${song}.json`)
			.then((res) => this.getServerState())
			.catch((error) => console.log(error));
	};

	render() {
		return (
			<div>
				<SongForm clicked={this.submitHandler} title={this.title} />
				<div className={classes.SongOverview}>
					<div>Song</div>
					<div>Artist</div>
					<div>Genre</div>
					<div>Rating</div>
					<div>Delete</div>
				</div>
				<SongList songs={this.state.songs} deleted={this.deleteSongHandler} />
			</div>
		);
	}
}

export default SongOverview;
