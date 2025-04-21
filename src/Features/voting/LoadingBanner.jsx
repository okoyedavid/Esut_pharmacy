function LoadingBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 mb-8 animate-pulse">
      <div className="h-8 bg-white/20 rounded-md w-3/4 mb-4"></div>
      <div className="h-4 bg-white/20 rounded-md w-1/2 mb-6"></div>
      <div className="flex justify-center space-x-4">
        <div className="h-16 w-16 bg-white/20 rounded-md"></div>
        <div className="h-16 w-16 bg-white/20 rounded-md"></div>
        <div className="h-16 w-16 bg-white/20 rounded-md"></div>
        <div className="h-16 w-16 bg-white/20 rounded-md"></div>
      </div>
    </div>
  );
}

export default LoadingBanner;
