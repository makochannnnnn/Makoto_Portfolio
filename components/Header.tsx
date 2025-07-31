import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-green-800 text-white p-4">
        <h1 className="text-2xl font-bold">My Application</h1>
        <nav>
            <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/achievment" className="hover:underline">Achievment</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/technology" className="hover:underline">Technology</Link></li>
            <li><Link href="/hobby" className="hover:underline">Hobby</Link></li>
            <li><Link href="/interests" className="hover:underline">Interests</Link></li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;