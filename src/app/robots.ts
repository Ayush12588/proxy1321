<<<<<<< HEAD
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://leakdata.org/sitemap.xml',
    };
}
=======
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://leakdata.org/sitemap.xml',
    };
}
>>>>>>> 6c2a35b2e0831d4790b65e12978b2ec37f299a4c
