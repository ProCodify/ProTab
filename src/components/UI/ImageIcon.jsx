import PropTypes from 'prop-types';
import styled from 'styled-components';
const sizes = {
  sm: '16px',
  md: '32px',
  rg: '50px',
  lg: '100px',
};
const ImageIcon = styled.img`
  width: ${({ size }) => sizes[size] || '100%'};
  height: ${({ size }) => sizes[size] || '100%'};
`;

ImageIcon.propTypes = {
  size: PropTypes.string,
};
export default ImageIcon;
