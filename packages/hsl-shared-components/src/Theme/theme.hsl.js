import Media, { sizes } from './media-templates';
import colors from './colors';

const hslTheme = {
  Media, // used in components
  sizes, // used by utils
  colors, // HSL brand colors – use these instead of your own where possible
  font: {
    family: '"Gotham Rounded SSm A, Gotham Rounded SSm B, Arial, Georgia, serif"',
    familyNarrow: '"Gotham XNarrow SSm A, Gotham XNarrow SSm B, Arial, Georgia, serif"',
    colors: {
      default: colors.primary.hslGreyDark, // Used by default text
      highlight: colors.primary.hslBlue, // Used to highlight text from other e.g used for links
      secondary: colors.primary.hslGrey, // Text with low visual impact e.g. disabled
    },
    size: 14, // Default font size in px,
    weight: '500', // Default font weight
  },
  error: {
    color: {
      primary: colors.secondary.hslMagenta, // E.g for error notification text color
      secondary: colors.secondary.hslMagentaDark, // E.g for error notification background color
    },
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
};

export default hslTheme;
