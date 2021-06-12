module.exports = {
  purge: {
    options: {
      whitelistPatterns: [/agile*/],
      whitelistPatternsChildren: [/agile*/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        "geers-green": "#60B02F",
        "geers-gray": "#4C4D50",
      },
      height: {
        100: "28rem",
        200: "43rem",
        250: "6s0rem",
      },
      width: {
        100: "28rem",
        200: "43rem",
        250: "6s0rem",
      },
      backgroundColor: {
        "geers-green": "#60B02F",
        "geers-green-hover": "#4AA724",
        "geers-gray": "#4C4D50",
        "geers-blue": "#D6E4E4",
        transparent: "rgba(0, 0, 0, 0.5)",
      },

      borderColor: {
        "geers-gray": "#4C4D50",
      },
      screens: {
        xs: { min: "300px", max: "639px" },
        sm: { min: "640px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1279px" },
        xl: { min: "1280px", max: "1535px" },
        "2xl": { min: "1536px" },
      },
      marginBottom: {
        100: "28rem",
        xxl: "415px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
