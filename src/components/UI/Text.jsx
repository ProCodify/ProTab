import PropTypes from 'prop-types';
import styled from 'styled-components';
import UIConfig from '../../config/UI.config';
const sizes = {
  xsm: '10px',
  sm: '12px',
  md: '16px',
  lg: '24px',
  xlg: '30px',
};

const fontWeight = {
  xsm: 100,
  sm: 400,
  md: 400,
  lg: 500,
  xlg: 900,
};

const modes = {
  light: '#000',
  dark: '#fff',
  theme: UIConfig.theme_color,
};

const Text = styled.h2`
  color: ${(props) => modes[props.mode] || '#000'};
  font-size: ${(props) => sizes[props.size] || '14px'};
  font-family: ${UIConfig.font_family}, sans-serif;
  font-weight: ${(props) =>
    fontWeight[props.weight || props.size] || 'regular'};
  line-height: 14px;
`;

Text.propTypes = {
  mode: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
};
export default Text;
