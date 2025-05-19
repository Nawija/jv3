const ShimmerLoader = () => {
    return (
      <div className="shimmer-wrapper w-full h-full bg-zinc-300 rounded-md overflow-hidden relative">
        <div className="shimmer absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-shimmer" />
      </div>
    );
  };
  
  export default ShimmerLoader;