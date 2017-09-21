import Media, { sizes } from './media-templates';
import colors from './colors';

const primaryBlue = '#007ac9';
const primaryWhite = '#ffffff';

const hslTheme = {
  Media, // used in components
  sizes, // used by utils
  colors,
  font: {
    family: '"Gotham Rounded SSm A, Gotham Rounded SSm B, Arial, Georgia, serif"',
    familyNarrow: '"Gotham XNarrow SSm A, Gotham XNarrow SSm B, Arial, Georgia, serif"',
    color: {
      default: colors.primary.hslGreyDark,
      primary: colors.primary.hslBlue,
      secondary: colors.primary.hslGreyLight,
    },
    size: '16px',
    weight: '500',
    letterSpacing: '-0.5px',
  },
  error: {
    color: {
      primary: colors.secondary.hslMagenta,
      secondary: colors.secondary.hslMagentaDark,
    },
  },
  logo: {
    height: '4rem',
    fill: colors.background.hslWhite,
  },
  primary: primaryBlue,
  primaryText: primaryWhite,
  listItemMarker: '#62bae7',
  secondary: '#888888',
  default: '#b7b7b7',
  background: primaryBlue,
  scrollNavHeight: '3.75rem',
  logoHeight: '4rem',
  logoFill: primaryWhite,
  radioBtnActive: '#0062a1',
  fontFamily: '"Gotham Rounded SSm A, Gotham Rounded SSm B, Arial, Georgia, serif"',
  fontFamilyNarrow: '"Gotham XNarrow SSm A, Gotham XNarrow SSm B, Arial, Georgia, serif"',
  fontSize: '16px',
  fontWeight: '500',
  letterSpacing: '-0.5px',
  activatablePointerHeight: '0.6rem',
  activatableLineHeight: '4px',
};

export default hslTheme;
