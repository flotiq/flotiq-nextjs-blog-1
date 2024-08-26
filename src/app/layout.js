import './globals.css';

export const viewport = {
    width: 'device-width',
    initialScale: 1,
};

export const metadata = {
    title: {
        template: 'Flotiq NextJs starter for blog | %s',
        default: 'Flotiq NextJs starter for blog',
    },
    description: 'Flotiq NextJs starter for blog',
    openGraph: { title: 'Flotiq NextJs starter for blog' },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="font-sora">{children}</body>
        </html>
    );
}
