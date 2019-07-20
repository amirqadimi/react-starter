import React, {Component} from 'react';

import SearchBar from '@/containers/search-bar/search-bar';
import VideoDetails from '@/containers/video-details/video-details';
import SearchItems from '@/containers/search-items/search-items';

class Home extends Component {
	render() {
		return (
			<div className="section section--intro">
				<div className="section-wrap">
					<div className="row">
						<div className="col-xs-24 col-md-12">
							<SearchBar/>
							<VideoDetails/>
						</div>
						<aside className="col-xs-24 col-md-12">
							<SearchItems/>
						</aside>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;