import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Layout({ children }) {
    return (
        <main className="px-6 bg-white">
            <Header />
            {children}
            <Footer />
        </main>
    );
}
