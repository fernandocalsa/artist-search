import React from 'react';
import { propTypes, defaultProps } from './prop-types';
import './style.css';
import searchIcon from './search.png';
const SearchBox = ({ onInput }) => {
	return (
		<div className="search-box">
			<div className="search-icon">
				<img src={searchIcon} alt="icon" />
			</div>
			<input
				className="input"
				type="text"
				placeholder="Search artists"
				onChange={e => onInput(e.target.value)} />
		</div>
	);
};

SearchBox.propTypes = propTypes;
SearchBox.defaultProps = defaultProps;

export default SearchBox;
