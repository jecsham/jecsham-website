/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/donate",
        destination: "https://www.paypal.com/donate?hosted_button_id=CSLCZ8PX29WZN",
      },
    ];
  },
};

module.exports = nextConfig;
