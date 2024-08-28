import LayoutTemplate from '@/templates/LayoutTemplate';

export default function Layout({ children }) {
    return (
        <LayoutTemplate className="px-4 bg-light-gray">
            {children}
        </LayoutTemplate>
    );
}
