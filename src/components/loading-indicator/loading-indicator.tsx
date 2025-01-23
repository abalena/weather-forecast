export function LoadingIndicator() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="mb-4 w-6 h-6 border-4 border-gray-100 bordet-t-4 border-t-blue-500 rounded-[50%] animate-spin"></div>
      Loading...
    </div>
  );
}

export default LoadingIndicator;
