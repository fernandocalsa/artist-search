import {
  string,
  func,
} from 'prop-types';
  
export const propTypes = {
  text: string.isRequired,
  onInput: func.isRequired,
};

export const defaultProps = {
	text: '',
	onInput: () => null,
};