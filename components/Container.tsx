export default function Container({ children }: { children: React.ReactNode }) {
    return <div className="lg:px-12 px-6">{children}</div>;
}
