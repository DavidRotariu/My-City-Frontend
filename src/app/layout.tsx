import type { Metadata } from 'next';
import './globals.css';
import '@mantine/core/styles.css';
import 'leaflet/dist/leaflet.css';
import { MantineProvider } from '@mantine/core';
export const metadata: Metadata = {
    title: 'My City',
    description: 'An app to improve polution in your city'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                    crossOrigin=""
                />
            </head>
            <body>
                <MantineProvider>{children}</MantineProvider>
            </body>
        </html>
    );
}
