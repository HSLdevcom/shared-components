import Media, { sizes, colors } from './media-templates';

const primaryBlue = '#007ac9';
const primaryWhite = '#ffffff';

const hslTheme = {
  Media, // used in components
  sizes, // used by utils
  colors,
  primary: primaryBlue,
  primaryText: primaryWhite,
  listItemMarker: '#62bae7',
  secondary: '#888888',
  default: '#b7b7b7',
  background: primaryBlue,
  md: '900px',
  scrollNavHeight: '3.75rem',
  logoHeight: '4rem',
  logoFill: primaryWhite,
  radioBtnActive: '#0062a1',
  fontFamily: '"Gotham Rounded SSm A, Gotham Rounded SSm B"',
  fontFamilyNarrow: '"Gotham XNarrow SSm A, Gotham XNarrow SSm B"',
  fontSize: '16px',
  fontWeight: '500',
  letterSpacing: '-0.5px',
  activatablePointerHeight: '0.6rem',
  activatableLineHeight: '4px'
};

export default hslTheme;
