/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Agregar estilos personalizados al cuerpo (body)
      body: {
        'background-color': 'rgb(241, 245, 241)',
        'width': '100%',
        'overflow-x': 'hidden',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
