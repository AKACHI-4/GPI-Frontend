/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#d9d9d9",
          "200": "#a1a1a4",
          "300": "#8996ac",
          "400": "#6f7d95",
          "500": "#494a50",
          "600": "#323b4a",
          "700": "#0d1117",
          "800": "#0d1116",
        },
        black: "#000",
        indigo: { "100": "#1c68e4", "200": "#3251be" },
        turquoise: "#32be83",
        orange: "#be9732",
        "colors-neutral-gray-4": "#e4e4e4",
        "divider-light-1px-60": "rgba(228, 228, 228, 0.6)",
        "neutral-colors-white": "#fff",
      },
      fontFamily: {
        "button-text-bold": "Inter",
        arial: "Arial",
        abeezee: "ABeeZee",
      },
      borderRadius: { small: "5px", base: "10px", large: "15px" },
    },
    fontSize: {
      xs: "15px",
      sm: "16px",
      base: "18px",
      lg: "20px",
      xl: "22px",
      "2xl": "30px",
    },
  },
  corePlugins: { preflight: false },
};
