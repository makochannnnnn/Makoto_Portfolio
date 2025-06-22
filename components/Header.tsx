const Header = () => {
    return (
        <header className="bg-green-800 text-white p-4">
        <h1 className="text-2xl font-bold">My Application</h1>
        <nav>
            <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/achievment" className="hover:underline">Achievment</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/technology" className="hover:underline">Technology</a></li>
            <li><a href="/hobby" className="hover:underline">Hobby</a></li>
            <li><a href="/interests" className="hover:underline">Interests</a></li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;