import LayoutTemplate from '@/templates/LayoutTemplate';

export default function Layout({ children }) {
    return (
        <LayoutTemplate className="px-6 bg-white">{children}</LayoutTemplate>
    );
}
