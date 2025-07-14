import type { MetadataRoute } from "next";

function siteMap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://pouria-drd.ir",
            lastModified: "07/15/2025",
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://pouria-drd.ir/projects",
            lastModified: "07/15/2025",
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://pouria-drd.ir/contact-me",
            lastModified: "07/15/2025",
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}
export default siteMap;
