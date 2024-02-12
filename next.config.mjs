/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
  ...nextConfig,
    sassOptions: {
      prependData:  `@import "./_mantine.scss";`,
    }
}
