export const Shimmer_effect = () => {
    return (
      <div className="flex flex-wrap gap-4 p-4 mt-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            className="w-80 h-96 bg-gray-200 rounded-lg overflow-hidden relative mb-10 gap-10"
            key={index}>
            <div className="w-full h-48 bg-gray-300 shimmer"></div>
            <div className="p-4 w-full h-48 shimmer">
              <div className="h-4 bg-gray-300 shimmer mb-2 rounded"></div>
              <div className="h-3 bg-gray-300 shimmer rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
