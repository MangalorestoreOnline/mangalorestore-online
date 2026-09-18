import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // MangaloreStore Brand Palette
        brand: {
          saffron: {
            DEFAULT: "#E8571A",
            50: "#FCF0EA",
            100: "#F9DDD0",
            200: "#F3BAA1",
            300: "#ED9772",
            400: "#EA7746",
            500: "#E8571A",
            600: "#C8430E",
            700: "#9A3209",
            800: "#6C2205",
            900: "#3E1302",
          },
          teal: {
            DEFAULT: "#0D7680",
            50: "#E8F6F7",
            100: "#C4EAED",
            200: "#9DDCE1",
            300: "#6ECCCE",
            400: "#3EB8BD",
            500: "#0D7680",
            600: "#0A5E66",
            700: "#07464D",
            800: "#042F33",
            900: "#02171A",
          },
          cream: {
            DEFAULT: "#FDF8F0",
            50: "#FFFFFF",
            100: "#FDF8F0",
            200: "#F8EBD7",
            300: "#F2DEBE",
            400: "#ECD1A5",
            500: "#E6C48C",
          },
          dark: {
            DEFAULT: "#1A1A1A",
            800: "#2A2A2A",
            900: "#1A1A1A",
          }
        },
        primary: {
          DEFAULT: "#E8571A",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#0D7680",
          foreground: "#FFFFFF",
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
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSubtle: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.9" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 25s linear infinite",
        "pulse-subtle": "pulseSubtle 2s infinite ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
