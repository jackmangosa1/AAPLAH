import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

function Error({ statusCode }: { statusCode: number }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <div className="flex-grow flex flex-col justify-center items-center p-4">
        <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 md:p-16 text-center max-w-2xl w-full">
          <h1 className="text-5xl sm:text-6xl font-bold text-green mb-4">
            {statusCode || "404"}
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-4">
            Oops! Page not found
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <div className="flex justify-center items-center mb-8">
            <Link
              href="/"
              className="flex items-center justify-center bg-green text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg hover:bg-green-600 transition-colors duration-300 w-full sm:w-auto"
            >
              <FaHome className="mr-2" />
              Go to Homepage
            </Link>
          </div>
          <p className="text-sm sm:text-base text-gray-600">
            If you think this is an error, please{" "}
            <Link href="/#contacts" className="text-green hover:underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: { res: any; err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
