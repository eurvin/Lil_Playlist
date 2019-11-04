import React, { Component } from 'react';
import Song from './Song/Song';

class Songlist extends Component {
	render() {
		return (
			<React.Fragment>
				<div>
					<Song songs={this.props.songs} delete={this.props.deleted} />
				</div>
			</React.Fragment>
		);
	}
}

export default Songlist;
