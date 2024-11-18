/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
    },
  },
  corePlugins: {
    preflight: false,  // 添加这一行
  },
}