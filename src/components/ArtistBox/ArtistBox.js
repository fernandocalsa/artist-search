import React from 'react';
import propTypes from './prop-types';
import './style.css';

const ArtistBox = ({ artist, onFollowClick }) => {
	return (
		<div className="artist-box">
			<div className="image">
				<img src={artist.img} alt="artist" />
			</div>
			<h3 className="name">{artist.name}</h3>
			<button
				className="follow-btn"
				onClick={() => console.log('click!')}
				>
				Follow
			</button>
		</div>
	);
};

ArtistBox.propTypes = propTypes;

export default ArtistBox;
