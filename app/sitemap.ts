import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://poligrade.com'

  return [
    { url: baseUrl },
    { url: `${baseUrl}/quiz` },
    { url: `${baseUrl}/grades` },
    { url: `${baseUrl}/faq` },
    { url: `${baseUrl}/contact` },
    { url: `${baseUrl}/donate` },
    { url: `${baseUrl}/privacy` },
  ]
}
