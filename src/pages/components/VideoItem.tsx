import React from "react";

interface VideoItemProps {
  video: {
    id: number;
    title: string;
    src: string;
    format: "16:9" | "9:16";
  };
  onSelect: () => void;
}

const VideoItem: React.FC<VideoItemProps> = ({ video, onSelect }) => {
  const aspectRatioClass =
    video.format === "16:9" ? "aspect-video" : "aspect-[9/16]";

  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 border-2 border-slate-800 hover:border-slate-500 max-w-xs"
      onClick={onSelect}
    >
      <div
        className={`flex items-center justify-center bg-black ${aspectRatioClass}`}
      >
        {/* This is a placeholder for a thumbnail, but for now, it's a play button */}
        <div className="absolute z-10 flex h-full w-full items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
          <svg
            className="h-16 w-16 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
        </div>
        <video
          className="h-full w-full object-cover"
          src={video.src}
          muted
          playsInline
        />
      </div>
      {/* <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
        <h3 className="font-bold text-white">{video.title}</h3>
      </div> */}
      <div className="absolute bottom-0 w-full bg-black/30 p-4">
        <h3 className="font-bold text-white/80 text-center">{video.title}</h3>
      </div>
    </div>
  );
};

export default VideoItem;
