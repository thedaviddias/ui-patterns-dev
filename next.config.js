// @ts-check

/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require('next-plausible')
const plausiblePlugin = withPlausibleProxy

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  flexsearch: {
    codeblocks: true,
  },
  staticImage: true,
  contentDump: true,
  defaultShowCopyCode: true,
  readingTime: true
})

const nextConfig = withNextra({
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // ESLint managed on the workspace level
    ignoreDuringBuilds: true,
  }

  // To add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // }
})

module.exports = () => {
	const plugins = [
    plausiblePlugin
  ]

	return nextConfig;
};
