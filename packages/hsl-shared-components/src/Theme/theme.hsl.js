import Media, { sizes } from './media-templates';
import colors from './colors';

const primaryBlue = '#007ac9';
const primaryWhite = '#ffffff';

const hslTheme = {
  Media, // used in components
  sizes, // used by utils
  colors, // HSL brand colors – use these instead of your own where possible
  font: {
    family: '"Gotham Rounded SSm A, Gotham Rounded SSm B, Arial, Georgia, serif"',
    familyNarrow: '"Gotham XNarrow SSm A, Gotham XNarrow SSm B, Arial, Georgia, serif"',
    color: {
      default: colors.primary.hslGreyDark, // Used by default text
      primary: colors.primary.hslBlue, // Used to highlight text from other e.g used for links
      secondary: colors.primary.hslGreyLight, // Text with low visual impact e.g. disabled
    },
    size: '16px', // Default font size,
    weight: '500', // Default font weight
    letterSpacing: '-0.5px', // Default letter spacing
  },
  error: {
    color: {
      primary: colors.secondary.hslMagenta, // E.g for error notification text color
      secondary: colors.secondary.hslMagentaDark, // E.g for error notification background color
    },
  },
  logo: {
    height: '4rem',
    fill: colors.background.hslWhite,
  },
  // Layer system for your app
  // Use with z-index or comparable setting
  // If you need to make some of your own, use following method: myLayer = theme.layers.top + 1
  // Very important in order to keep developer sanity
  layers: {
    modal: 900,
    overlay: 800,
    menu: 700,
    contextMenu: 600,
    top: 100,
    middle: 50,
    bottom: 0,
  },
  custom: {
    // Set your project-specific theme variables via this key
    // These will never be overwritten by package updates etc.
  },
  // primary: primaryBlue,
  // primaryText: primaryWhite,
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
