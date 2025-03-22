import chadcnTailwindcss from '@chadcn/tailwindcss';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        background: "var(--background-color)",
        text: "var(--text-color)",
        accent: "var(--accent-color)",
        "accent-2": "var(--accent-color-2)",
        "accent-3": "var(--accent-color-3)",
        "accent-4": "var(--accent-color-4)",
        "accent-5": "var(--accent-color-5)",
      },
    },
  },
  plugins: [
    chadcnTailwindcss,
  ],
}