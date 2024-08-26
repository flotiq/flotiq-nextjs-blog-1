import Footer from '@/components/Footer';
import Header from '@/components/Header';

const LayoutTemplate = ({ className, children }) => (
    <main className={className}>
        <Header />
        {children}
        <Footer />
    </main>
);

export default LayoutTemplate;
