/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/Vitoria_Concursos" : "",
  assetPrefix: isProd ? "/Vitoria_Concursos/" : "",
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

export default nextConfig;
