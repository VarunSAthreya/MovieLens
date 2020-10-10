import type { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
    return (
        <footer className="py-8 bg-gray-800">
            <div className="max-w-6xl px-4 mx-auto sm:px-6 md:px-8 lg:px-10">
                <div className="flex items-center justify-center lg:justify-end">
                    <span className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400">
                            Powered by
                        </span>
                        <a
                            href="https://www.themoviedb.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 423.04 35.4"
                                className="h-3"
                            >
                                <defs>
                                    <linearGradient
                                        id="a"
                                        x2="423.04"
                                        y1="17.7"
                                        y2="17.7"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset="0" stopColor="#90cea1" />
                                        <stop
                                            offset=".56"
                                            stopColor="#3cbec9"
                                        />
                                        <stop offset="1" stopColor="#00b3e5" />
                                    </linearGradient>
                                </defs>
                                <path
                                    fill="url(#a)"
                                    d="M227.5 0h8.9l8.75 23.2h.1l8.9-23.2h8.35l-14.6 35.4h-6.25zm46.6 0h7.8v35.4h-7.8zm22.2 0h24.05v7.2H304.1v6.6h15.35V21H304.1v7.2h17.15v7.2H296.3zm55 0H363a33.54 33.54 0 018.07 1 18.55 18.55 0 016.68 3 15.1 15.1 0 014.52 5.53A18.5 18.5 0 01384 17.8a16.91 16.91 0 01-1.63 7.58 16.37 16.37 0 01-4.37 5.5 19.52 19.52 0 01-6.35 3.37A24.59 24.59 0 01364 35.4h-12.71zm7.81 28.2h4a21.57 21.57 0 005-.55 10.87 10.87 0 004-1.83 8.69 8.69 0 002.67-3.34 11.92 11.92 0 001-5.08 9.87 9.87 0 00-1-4.52 9 9 0 00-2.62-3.18 11.68 11.68 0 00-3.88-1.88 17.43 17.43 0 00-4.67-.62h-4.6zM395.24 0h13.2a34.42 34.42 0 014.63.32 12.9 12.9 0 014.17 1.3 7.88 7.88 0 013 2.73A8.34 8.34 0 01421.39 9a7.42 7.42 0 01-1.67 5 9.28 9.28 0 01-4.43 2.82v.1a10 10 0 013.18 1 8.38 8.38 0 012.45 1.85 7.79 7.79 0 011.57 2.62 9.16 9.16 0 01.55 3.2 8.52 8.52 0 01-1.2 4.68 9.42 9.42 0 01-3.1 3 13.38 13.38 0 01-4.27 1.65 23.11 23.11 0 01-4.73.5h-14.5zM403 14.15h5.65a8.16 8.16 0 001.78-.2 4.78 4.78 0 001.57-.65 3.34 3.34 0 001.13-1.2 3.63 3.63 0 00.42-1.8 3.22 3.22 0 00-.47-1.82 3.33 3.33 0 00-1.23-1.13 5.77 5.77 0 00-1.7-.58 10.79 10.79 0 00-1.85-.17H403zm0 14.65h7a8.91 8.91 0 001.83-.2 4.78 4.78 0 001.67-.7 4 4 0 001.23-1.3 3.71 3.71 0 00.47-2 3.13 3.13 0 00-.62-2 4 4 0 00-1.58-1.15 7.83 7.83 0 00-2-.55 15.12 15.12 0 00-2.05-.15H403zm-199 6.53h1a17.66 17.66 0 0017.66-17.66A17.67 17.67 0 00205 0h-.91a17.67 17.67 0 00-17.69 17.67 17.66 17.66 0 0017.66 17.66zM10.1 6.9H0V0h28v6.9H17.9v28.5h-7.8zM39 0h7.8v13.2h15.1V0h7.8v35.4h-7.8V20.1H46.75v15.3H39zm41.2 0h24v7.2H88v6.6h15.35V21H88v7.2h17.15v7.2h-25zm55 0H147l8.15 23.1h.1l8.2-23.1h11.75v35.4h-7.8V8.25h-.1L158 35.4h-5.95l-9-27.15H143V35.4h-7.8z"
                                />
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
