/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(0, 0%, 1%)",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      backgroundImage: {
        "cannabis-cover":
          "url('https://perfect-prerolls.s3.amazonaws.com/Public/Assets/cannabis-cover.jpg')",
        "purple-cannabis":
          "url('https://perfect-prerolls.s3.amazonaws.com/Public/Assets/purple-cannabis.jpg')",

        "machine-front":
          "url('https://perfect-prerolls.s3.amazonaws.com/Public/Assets/machine-front.png')",
        "placeholder-joints":
          "url('https://perfect-prerolls.s3.amazonaws.com/Public/Assets/placeholder-joints.jpg')",
        "placeholder-machine-dark":
          "url('https://perfect-prerolls.s3.amazonaws.com/Public/Assets/placeholder-machine-dark.jpg')",
        "placeholder-joints-dark":
          "url('https://perfect-prerolls.s3.amazonaws.com/Public/Assets/placeholder-joints-dark.jpg')",
        sunset:
          "url('https://perfect-prerolls.s3.amazonaws.com/Public/Assets/sunset.jpg')",
        "pink-cannabis":
          "url('https://perfect-prerolls.s3.amazonaws.com/Public/Assets/pink-cannabis.jpg')",
        "machine-banner":
          "url('https://perfect-prerolls.s3.amazonaws.com/Public/Assets/machine-banner.png')",
        "packed-banner":
          "url('https://perfect-prerolls.s3.amazonaws.com/Public/Assets/packed-banner.png')",
        "newsletter-banner":
          "url('https://perfect-prerolls.s3.amazonaws.com/Public/Assets/envelope.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
