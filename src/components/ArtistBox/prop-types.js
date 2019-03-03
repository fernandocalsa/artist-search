import {
	string,
	shape,
	func,
} from 'prop-types';
    
export default {
	artist: shape({
		name: string,
		img: string,
	}),
	onFollowClick: func,
};
