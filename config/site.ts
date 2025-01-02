import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const baseSiteConfig = {
  name: "hex8 smAchAr",
  description:
    "hex8 smAchAr bhArAT/asiA ki phonetic laNguages scripts me fontpicker ke sATh",
  url: "https://hex8.vercel.app",
  metadataBase: '/',
  keywords: ["HinDi bANgla Tamil kannadA news"],
  authors: [ { name: "vimalkumAr", url: "https://zava8.github.io", twitter: 'https://x.com/etphor', } ],
  creator: '@viimalkumAr',
  defaultNextTheme: 'dark', // next-theme option: system | dark | light
  icons: { icon: "/favicon.ico", shortcut: "/logo.png", apple: "/logo.png", },
  headerLinks: [
    { name: 'repo', href: "https://github.com/zava810/hex8", icon: BsGithub },
    { name: 'twitter', href: "https://x.com/etphor", icon: BsTwitterX },
    { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee }
  ],
  footerLinks: [
    { name: 'email', href: "mailto:vimalkg@gmail.com", icon: MdEmail },
    { name: 'twitter', href: "https://x.com/etphor", icon: BsTwitterX },
    { name: 'github', href: "https://github.com/zava810/", icon: BsGithub },
    { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee },
    { name: 'juejin', href: "https://juejin.cn/user/26044008768029", icon: SiJuejin },
  ],
  footerProducts: [
    { url: 'https://fb.com/ztrabc', name: 'ztrabc' },
    { url: 'https://fb.com/8fgrm/', name: '8fgrm' },
    { url: 'https://nextjs.weijunext.com/', name: 'Next.js Practice' },
    { url: 'https://PHCopilot.AI/', name: 'Product Hunt Copilot' },
    { url: 'https://smartexcel.cc/', name: 'Smart Excel' },
    { url: 'https://weekly.weijunext.com/', name: 'Weekly Boilerplate' },
    { url: 'https://landingpage.weijunext.com/', name: 'Landing Page Boilerplate' },
    { url: 'https://github.com/weijunext/indie-hacker-tools', name: 'Indie Hacker Tools' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    site: baseSiteConfig.url,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.jpg`],
    creator: baseSiteConfig.creator,
  },
}
