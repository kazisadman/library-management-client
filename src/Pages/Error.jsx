const Error = () => {
  return (
    <div>
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            404 Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <p className="text-gray-600">
            Please check the URL or go back to the{" "}
            <a href="/" className="text-blue-600 hover:underline">
              homepage
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
