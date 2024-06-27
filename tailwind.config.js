/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Incluye todos los archivos JavaScript y TypeScript en la carpeta src
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8f9fa', // Fondo gris claro
        foreground: '#343a40', // Texto oscuro
        primary: '#007bff', // Color primario
        'primary-foreground': '#ffffff', // Texto sobre color primario
        secondary: '#6c757d', // Color secundario
        'secondary-foreground': '#ffffff', // Texto sobre color secundario
        'muted-foreground': '#6c757d', // Texto muted
      },
    },
  },
  plugins: [],
}
