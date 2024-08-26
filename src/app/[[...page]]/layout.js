import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Layout({ children }) {
    return (
        <main className="px-4 bg-light-gray">
            <Header />
            {children}
            <Footer />
        </main>
    );
}
