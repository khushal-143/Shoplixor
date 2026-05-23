import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="tw:flex tw:min-h-screen tw:items-center tw:justify-center tw:bg-linear-to-br tw:from-slate-900 tw:via-gray-800 tw:to-slate-950 tw:px-6 tw:text-white">
            <div className="tw:text-center">

                <h1 className="tw:text-8xl tw:font-extrabold tw:tracking-widest tw:text-transparent tw:bg-clip-text tw:bg-linear-to-r tw:from-cyan-400 tw:to-blue-500 tw:drop-shadow-lg">
                    404
                </h1>
                <div className="tw:mx-auto tw:mt-3 tw:h-1 tw:w-28 tw:rounded-full tw:bg-linear-to-r tw:from-cyan-400 tw:to-blue-500"></div>
                <h2 className="tw:mt-6 tw:text-3xl tw:font-bold md:tw:text-4xl">
                    Oops! Page Not Found
                </h2>
                <p className="tw:mx-auto tw:mt-4 tw:max-w-md tw:text-gray-300">
                    The page you are looking for might have been removed,
                    renamed, or is temporarily unavailable.
                </p>

                <Link
                    to="/home"
                    className="tw:mt-8 tw:inline-block tw:rounded-xl tw:bg-linear-to-r tw:from-cyan-500 tw:to-blue-600 tw:px-6 tw:py-3 tw:text-lg tw:font-semibold tw:shadow-lg tw:transition-all tw:duration-300 hover:tw:scale-105 hover:tw:shadow-cyan-500/40"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;