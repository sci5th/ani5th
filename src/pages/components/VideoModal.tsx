import React from "react";

interface VideoModalProps {
  video: {
    src: string;
    format: "16:9" | "9:16";
  } | null;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  if (!video) return null;

  const aspectRatioClass =
    video.format === "16:9" ? "aspect-video" : "aspect-[9/16]";
  const maxWidthClass = video.format === "16:9" ? "max-w-6xl" : "max-w-md";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-800 p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 z-50 text-4xl text-white hover:text-gray-300"
        onClick={onClose}
      >
        &times;
      </button>
      <div
        className={`relative  w-full ${maxWidthClass}`}
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking on the video
      >
        <div className={`w-full ${aspectRatioClass}`}>
          <video
            className="h-full w-full rounded-lg"
            src={video.src}
            controls
            autoPlay
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
