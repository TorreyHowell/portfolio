module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto Mono"', 'monospace'],
      },
    },
  },

  plugins: [require('daisyui')],
}
