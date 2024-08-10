import React from "react";

function Error({ statusCode }: { statusCode: number }) {
  console.log("Error status code:", statusCode);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col justify-center items-center bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 md:p-16 text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">
            {statusCode ? `Error ${statusCode}` : "Error"}
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            {statusCode
              ? `An error ${statusCode} occurred on server`
              : "An error occurred on client"}
          </p>
          <a
            href="/"
            className="inline-block bg-green text-white px-6 py-3 rounded-lg text-lg hover:bg-green-100 transition-colors duration-300"
          >
            Go to Homepage
          </a>
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
