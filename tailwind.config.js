export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins_Regular: ["POPPINS-REGULAR"],
        Montserrat_Regular: ["Montserrat-Regular"],
      },
      colors: {
        orange: {
          500: "#f9c465",
          600: "#e03500",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
