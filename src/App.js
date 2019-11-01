import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import SongOverview from './containers/SongOverview/SongOverview';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Layout>
					<SongOverview />
				</Layout>
			</React.Fragment>
		);
	}
}

export default App;
