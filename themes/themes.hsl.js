import Media from './media-templates';

const primaryBlue = '#007ac9';
const primaryWhite = '#ffffff';
const primaryDarkBlue = '#0062a1';

const hslTheme = {
  Media,
  primary: primaryBlue,
  primaryText: primaryWhite,
  primaryHover: primaryDarkBlue,
  listItemMarker: '#62bae7',
  secondary: '#888888',
  secondaryHover: '#f9f9f9',
  default: '#b7b7b7',
  defaultBackground: '#e4e4e4',
  background: primaryBlue,
  menuBorder: primaryDarkBlue,
  md: '900px',
  scrollNavHeight: '3.75rem',
  logoHeight: '4rem',
  logoFill: primaryWhite,
  radioBtnActive: '#0062a1',
  fontFamily: '"Gotham Rounded SSm A","Gotham Rounded SSm B"',
  fontSize: '16px',
  fontWeight: '500',
  letterSpacing: '-0.5px',
  activatablePointerHeight: '0.6rem',
  activatableLineHeight: '4px'
};

export default hslTheme;
