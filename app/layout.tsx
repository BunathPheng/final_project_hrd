import type { Metadata, Viewport } from "next";
import "@/style/globals.css";
import { satoshi } from "@/lib/font";
import { Toaster } from "@/components/ui/sonner";
import SessionWrapper from "@/context/SessionProvider";
import Providers from "@/components/feature/progress/providers";

const siteUrl = new URL(process.env.SITE_URL || "http://localhost:3000");

// Define default metadata that applies to all pages
export const metadata: Metadata = {
    // Basic metadata
    title: {
        template: "%s | SelaMonty",
        default: "SelaMonty | Explore Art, Science & History Virtually",
    },
    description:
        "Experience art, science and artifacts from around the world in our interactive digital museum. Explore 3D artifacts, and curated collections.",

    // Content type and encoding
    metadataBase: siteUrl,
    manifest: "/manifest.json",

    // Open Graph metadata for social sharing
    openGraph: {
        title: "SelaMonty",
        description:
            "Explore world-class art, science and historical artifacts in our immersive digital museum experience",
        // images: ['/og-image.jpg'],
        url: siteUrl,
        siteName: "SelaMonty",
        type: "website",
    },

    alternates: {
        canonical: siteUrl.toString(),
    },

    // Twitter card metadata
    twitter: {
        card: "summary_large_image",
        title: "Digital Museum | 3D Artifacts",
        description:
            "Explore world-class art, science and historical artifacts in our immersive digital museum experience",
        creator: "@btbteam",
        // images: ['/twitter-card.jpg'],
    },

    // Application icon
    icons: {
        icon: "/logo.svg",
        shortcut: "/logo.svg",
        apple: "/logo.svg",
    },

    // Robots metadata
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    // App information
    applicationName: "Sela Monty",
    authors: [{ name: "BTB Class Team", url: `${siteUrl}/about-us` }],
    generator: "Next.js",
    keywords: [
        "សិលាមន្ទីរ",
        "selamonty",
        "sela monty",
        "digital museum",
        "cambodia museum",
        "khmer museum",
        "3D artifacts",
        "online art gallery",
        "interactive history",
        "cultural heritage",
    ],
};

// Viewport settings
export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#0d1117" },
    ],
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org ",
                            "@type": "Museum",
                            name: "SelaMonty",
                            description:
                                "Digital museum featuring art, science and historical artifacts",
                            // Add more structured data here as needed
                            url: siteUrl.toString(),
                            logo: `${siteUrl}/logo.png`,
                            sameAs: [
                                // "https://twitter.com/btbteam ",
                                // Add other social profiles if available
                            ],
                        }),
                    }}
                />
            </head>
            <SessionWrapper>
                <body className={`text-p1 ${satoshi.className}`}>
                  
                            <Providers>{children}</Providers>
                        
                        <Toaster />
                </body>  
            </SessionWrapper>
        </html >
    );
}
