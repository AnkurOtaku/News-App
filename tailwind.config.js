/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,gif}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        '01d':`url(./components/weather/01d.gif)`,
        '02d':`url(./components/weather/02d.gif)`,
        '03d':`url(./components/weather/03d.gif)`,
        '04d':`url(./components/weather/04d.gif)`,
        '09d':`url(./components/weather/09d.gif)`,
        '10d':`url(./components/weather/10d.gif)`,
        '11d':`url(./components/weather/11d.gif)`,
        '13d':`url(./components/weather/13d.gif)`,
        '50d':`url(./components/weather/50d.gif)`,
        '01n':`url(./components/weather/01n.gif)`,
        '02n':`url(./components/weather/02n.gif)`,
        '03n':`url(./components/weather/03n.gif)`,
        '04n':`url(./components/weather/04n.gif)`,
        '09n':`url(./components/weather/09n.gif)`,
        '10n':`url(./components/weather/10n.gif)`,
        '11n':`url(./components/weather/11n.gif)`,
        '13n':`url(./components/weather/13n.gif)`,
        '50n':`url(./components/weather/50n.gif)`,
      }
    },
  },
  plugins: [],
}