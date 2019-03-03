import React from 'react';
import { connect } from 'react-redux';
import SearchBox from '../../components/SearchBox';
import ArtistBox from '../../components/ArtistBox';
import './styles.css';

const SearchArtists = ({ findArtists, artists }) => {
	return (
		<div className="search-artists">
			<SearchBox onInput={text => findArtists(text)}/>
			<div className="artists-results">
				{artists && artists.map(artist => (
					<ArtistBox key={artist.id} artist={artist} />
				))}
			</div>
		</div>
	)
}

const mapState = ({ artists }) => ({
	artists
})

const mapDispatch = ({ artists }) => ({
	findArtists: artists.findArtists,
})

export default connect(mapState, mapDispatch)(SearchArtists);
