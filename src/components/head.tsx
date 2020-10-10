import NextHead from 'next/head';
import { useRouter } from 'next/router';
import type { FunctionComponent } from 'react';

import SEO from '../seo.config';

type Props = {
    description?: string;
    previewImage?: string;
    title?: string;
};

const Head: FunctionComponent<Props> = ({
    description,
    previewImage,
    title,
}: Props) => {
    const router = useRouter();

    const seo = {
        description: description || SEO.siteDescription,
        image: previewImage || SEO.defaultImage,
        siteName: SEO.siteName,
        title: `${title} | ${SEO.siteName}`,
        twitterCardType: SEO.twitterCardType,
        twitterUsername: SEO.twitterUsername,
        url: `${SEO.siteUrl}${router.pathname}`,
    };

    return (
        <NextHead>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta name="description" content={seo.description} />

            {/* Open Graph */}
            <meta property="og:url" content={seo.url} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:site_name" content={seo.siteName} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />

            {/* Twitter */}
            <meta name="twitter:creator" content={seo.twitterUsername} />
            <meta name="twitter:card" content={seo.twitterCardType} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />

            <title>{seo.title}</title>
        </NextHead>
    );
};

export default Head;
