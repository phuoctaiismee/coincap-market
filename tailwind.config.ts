import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SFProDisplay: ["SF Pro Display", "sans-serif"],
      },
      colors: {
        "neutral-01": "#000000",
        "neutral-02": "#2b2b2b",
        "neutral-03": "#464646",
        "neutral-04": "#6d6d6d",
        "neutral-05": "#B1B1B1",
        "neutral-06": "#141416",
        "neutral-07": "#7c7c7c",
        "neutral-08": "#222222",
        "gray-01": "#636363",
        "gray-02": "#b4b4b4",
        "gray-03": "#6d6d6d",
        "gray-04": "#e6e6e6",
        "blue-primary": "#00359E",
        "blue-dark": "#00359e",
        "greenish-04": "#2DA262",
        "red-04": "#CB3232",
        "primary-light": "#0077ED",
        "yellow-01": "#FFAD40",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        blueDarkPrimary: "#00359E",
      },
      boxShadow: {
        primary: "0px 12px 48px 0px rgba(0, 0, 0, 0.12)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      container: {
        center: true,
        screens: {
          "2xl": "1400px",
        },
        padding: {
          DEFAULT: "1rem",
          //   "2xl": "8rem",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    fontFamily: {
      sf: ["SF Pro Display", "sans-serif"],
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
    function ({ addComponents }: any) {
      addComponents({
        ".text-16-20-600": {
          fontSize: "16px",
          fontWeight: "600",
          lineHeight: "20px",
        },
        ".text-16-20-700": {
          fontSize: "16px",
          fontWeight: "700",
          lineHeight: "20px",
        },
        ".text-32-32-600": {
          fontSize: "32px",
          fontWeight: "600",
          lineHeight: "32px",
        },
        ".text-15-20-600": {
          fontSize: "15px",
          fontWeight: "600",
          lineHeight: "20px",
        },
        ".text-13-20-600": {
          fontSize: "13px",
          fontWeight: "600",
          lineHeight: "20px",
        },
        ".text-14-18-500": {
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "18px",
        },
        ".text-14-18-600": {
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "18px",
        },
        ".text-11-15-600": {
          fontSize: "11px",
          fontWeight: "600",
          lineHeight: "15px",
        },
        ".text-36-54-700": {
          fontSize: "36px",
          fontWeight: "700",
          lineHeight: "54px",
        },
        ".text-14-21-500": {
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "21px",
        },
        ".text-12-18-600": {
          fontSize: "12px",
          fontWeight: "600",
          lineHeight: "18px",
        },
        ".text-16-24-600": {
          fontSize: "16px",
          fontWeight: "600",
          lineHeight: "24px",
        },
        ".text-36-47-700": {
          fontSize: "36px",
          fontWeight: "700",
          lineHeight: "47px",
        },
        ".text-16-16-600": {
          fontSize: "16px",
          fontWeight: "600",
          lineHeight: "16px",
        },
        ".text-12-18-500": {
          fontSize: "12px",
          fontWeight: "500",
          lineHeight: "18px",
        },
        ".text-14-20-600": {
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "20px",
        },
        ".text-14-21-600": {
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "21px",
        },
        ".text-20-18-600": {
          fontSize: "20px",
          fontWeight: "600",
          lineHeight: "18px",
        },
        ".text-20-18-500": {
          fontSize: "20px",
          fontWeight: "500",
          lineHeight: "18px",
        },
        ".text-16-16-500": {
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "16px",
        },
        ".text-48-62-700": {
          fontSize: "48px",
          fontWeight: "700",
          lineHeight: "62px",
        },
        ".text-16-22-500": {
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "22px",
        },
        ".text-12-20-500": {
          fontSize: "12px",
          fontWeight: "500",
          lineHeight: "20px",
        },
        ".text-28-28-700": {
          fontSize: "28px",
          fontWeight: "700",
          lineHeight: "28px",
        },
        ".text-14-21-400": {
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "21px",
        },
        ".text-20-20-700": {
          fontSize: "20px",
          fontWeight: "700",
          lineHeight: "20px",
        },
        ".text-18-25-600": {
          fontSize: "18px",
          fontWeight: "600",
          lineHeight: "25px",
        },
        ".text-18-27-600": {
          fontSize: "18px",
          fontWeight: "600",
          lineHeight: "27px",
        },
      });
    },
  ],
} satisfies Config;
