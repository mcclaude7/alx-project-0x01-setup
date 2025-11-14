const Header: React.FC = () => {
    return(
        <header className="bg-gray-200 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">ALX Project</h1>
                <ul className="flex space-x-4">
                    <li><a href="" className="hover:text-gray-800 text-white">Home</a></li>
                    <li><a href="" className="hover:text-gray-800 text-white">About</a></li>
                    <li><a href="" className="hover:text-gray-800 text-white">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;