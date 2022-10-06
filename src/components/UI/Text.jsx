import PropTypes from 'prop-types';
import styled from 'styled-components';
import uiConfig from '../../config/UI.config';
const sizes = {
  sm: '12px',
  md: '16px',
  lg: '24px',
  xlg: '30px',
};

const Text = styled.h2`
    color: ${(props) => props.color || uiConfig.theme_color || '#000'}
    font-size: ${(props) => sizes[props.size] || '14px'}
    font-family: '${uiConfig.font_family}', sans-serif;  
    line-height: 14px;
`;

Text.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};
export default Text;
