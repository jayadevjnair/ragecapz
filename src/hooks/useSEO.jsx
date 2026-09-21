import { useEffect } from 'react';

const useSEO = ({
  title,
  description,
  path = '',
  image = 'https://ragecapz.com/logos/ragecapz-logo.png', // Assuming a logo exists; fallback
}) => {
  useEffect(() => {
    // 1. Update Title
    const fullTitle = `${title} | RAGECAPZ`;
    document.title = fullTitle;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // 3. Update Canonical URL
    const canonicalUrl = `https://ragecapz.com${path}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonicalUrl;

    // 4. Open Graph Tags
    const ogTags = {
      'og:title': fullTitle,
      'og:description': description,
      'og:url': canonicalUrl,
      'og:type': 'website',
      'og:image': image,
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = content;
    });

  }, [title, description, path, image]);
};

export default useSEO;
