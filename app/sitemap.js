export default function sitemap() {
    return [
      {
        url: process.env.NEXT_PUBLIC_SITE_URL,
        lastModified: new Date(),
      },
      {
        url: process.env.NEXT_PUBLIC_SITE_URL + '/about',
        lastModified: new Date(),
      },
      {
        url: process.env.NEXT_PUBLIC_SITE_URL + '/experience',
        lastModified: new Date(),
      },
      {
        url: process.env.NEXT_PUBLIC_SITE_URL + '/portfolio',
        lastModified: new Date(),
      },
      {
        url: process.env.NEXT_PUBLIC_SITE_URL + '/contact',
        lastModified: new Date(),
      },
    ]
  }