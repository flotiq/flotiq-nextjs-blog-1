import './globals.css';

export const metadata = {
    title: 'Flotiq NextJs starter for blog',
    description: 'Flotiq NextJs starter for blog',
    viewport: 'initial-scale=1.0, width=device-width',
    openGraph: { title: 'Flotiq NextJs starter for blog' },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="font-sora">{children}</body>
        </html>
    );
}
