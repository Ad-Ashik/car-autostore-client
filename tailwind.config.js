module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctorstheme: {
          primary: "#0FCFEC",
          secondary: "#A4A5BB",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
    require('tw-elements/dist/plugin')
  ],

}
