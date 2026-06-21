import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // ඔයාගේ Live Vercel Link එක හෝ අනාගතයේදී ගන්න Custom Domain එක මෙතනට දෙන්න
  const baseUrl = 'https://saltx-surf-academy.vercel.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, // Home page එකට ඉහළම ප්‍රමුඛතාවය
    },
    {
      url: `${baseUrl}/rates`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9, // Gallery එක නිතර update වෙන නිසා priority එක වැඩියි
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}