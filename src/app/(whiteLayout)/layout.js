import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Layout({ children }) {
    return (
        <main className="px-4">
            <Header />
            {children}
            <Footer />
        </main>
    );
}
