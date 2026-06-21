import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // ඔයාගේ Live Link එක මෙතනටත් ලබා දෙන්න
  const baseUrl = 'https://saltx-surf-academy.vercel.app';

  return {
    rules: {
      userAgent: '*', // සියලුම Search Engines වලට අවසර ඇත
      allow: '/',     // සම්පූර්ණ වෙබ් අඩවියම Index කරන්න අවසර ඇත
      disallow: '/private/', // Index නොවිය යුතු රහසිගත පිටු ඇත්නම් මෙලෙස දැක්විය හැක
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Sitemap එකට යන ලින්ක් එක
  };
}