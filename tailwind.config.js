module.exports = {
  // mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        c01: 'rgba(245, 245, 245, 1)',
        c02: 'rgba(245, 245, 245, 0.5)',
        c03: 'rgba(245, 245, 245, 0.1)',
        c04: 'rgba(192, 31, 36, 1)',
        c05: 'rgba(180, 12, 18, 1)',
        c06: 'rgba(0, 0, 0, 0.9)',
        c07: 'rgba(0, 0, 0, 0.8)',
        c08: 'rgba(0, 0, 0, 0.7)',
        c09: 'rgba(0, 0, 0, 0.5)',
        c10: 'rgba(0, 0, 0, 0.4)',
        c11: 'transparent',
        c12: 'rgba(20, 20, 20, 1)',
        c13: 'rgba(20, 20, 20, 0.5)',
        c14: 'rgba(24, 24, 24, 0.96)',
        c15: 'rgba(24, 24, 24, 0.8)',
        c16: 'rgba(30, 31, 33, 1)',
        c17: 'rgba(31, 31, 31, 0.95)',
        c18: 'rgba(31, 31, 31, 0.7)',
        c19: 'rgba(47, 47, 47, 1)',
        c20: 'rgba(143, 143, 143, 1)',
        c21: 'rgba(143, 143, 143, 0.1)',
        c22: 'rgba(28, 192, 246, 1)',
        c23: 'rgba(95, 95, 95, 1)',
        c28: 'rgb(34, 174, 77)',
        c29: 'rgb(252, 203, 53)',

        // TEXT
        // default
        c31: 'rgba(245, 245, 245, 1)',
        // navigator
        c32: 'rgba(245, 245, 245, 0.5)',
        // warning
        c33: 'rgba(192, 31, 36, 1)',
        // unavaliable/input
        c34: 'rgba(134, 134, 134, 1)',
        // secondary
        c35: 'rgba(143, 143, 143, 1)',
        // reminder
        c36: 'rgba(28, 192, 246, 1)',
        // ICON
        c41: 'rgba(245, 245, 245, 1)',
        c42: 'rgba(245, 245, 245, 0.5)',
        c43: 'rgba(143, 143, 143, 0.1)',
        c44: 'rgba(192, 31, 36, 1)',
        c45: 'rgba(143, 143, 143, 1)',
        c46: 'rgba(28, 192, 246, 1)',
        c47: 'rgba(134, 134, 134, 1)',
      },
    },
  },
}
