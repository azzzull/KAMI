/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 18px 60px -28px rgba(15, 23, 42, 0.45)',
        glow: '0 24px 90px -45px rgba(198, 29, 143, 0.65)'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'mesh-primary':
          'radial-gradient(circle at 18% 18%, rgba(236, 25, 139, 0.22), transparent 28%), radial-gradient(circle at 82% 14%, rgba(30, 63, 174, 0.22), transparent 25%), radial-gradient(circle at 70% 78%, rgba(107, 31, 175, 0.18), transparent 26%), linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
      }
    }
  },
  plugins: []
};
