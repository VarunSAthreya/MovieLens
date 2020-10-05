import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <header className="bg-gray-800">
                <div className="max-w-6xl px-4 mx-auto sm:px-6 md:px-8 lg:px-10">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/">
                            <a className="text-gray-300 transition duration-150 ease-in-out hover:text-white focus:text-white focus:outline-none">
                                Movie App
                            </a>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
