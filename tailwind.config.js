/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        blink: ["blink"],
        cantarell: ["cantarell"],
        oxygen: ["oxygen"],
        poppins: ["poppins"],
        segoeUi: ["segoeUi"],
      },
      colors: {
        primary: "var(--primary)",
        projectBg: "var(--projectBg)",
        bluePlatte: "var(--blue-platte)",
        grayPlatte: "var(--gray-platte)",
        pinkPlatte: "var(--pink-platte)",
        bgDark: "#151418",
        darkGray: "#242329",
        midGray: "#46454a",
        header: "var(--header-text)",
        midGray: "var(--midGray)",
      },
    },
  },
  plugins: [],
};
