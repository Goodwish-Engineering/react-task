export default function FallbackPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        We are temporarily unavailable
      </h1>
      <p className="text-gray-700 text-lg">
        Please try again later.
      </p>
    </div>
  );
}
