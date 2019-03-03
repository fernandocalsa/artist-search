import {
  func,
} from 'prop-types';
  
export const propTypes = {
  onInput: func.isRequired,
};

export const defaultProps = {
	onInput: () => null,
};