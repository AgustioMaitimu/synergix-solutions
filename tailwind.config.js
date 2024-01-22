/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'generic': 'Merriweather Sans',
        'gnome': 'Russo One',
        'drawn': 'Grape Nuts',
        'pixel': 'Silkscreen'
      },
      backgroundImage: {
        'sign-in': 'url("/src/assets/backgrounds/background.jpg")',
        'main-image': "url('/src/assets/backgrounds/main-image.jpg')",
        'action-image': "url('/src/assets/backgrounds/action-background.jpg')"
      }
    },
  },
  plugins: [],
};

