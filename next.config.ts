import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  /** ADDED **/
  output: "export", // this is for static site generation for github pages, you can remove if its breaking
};

export default nextConfig;
