import { useState } from "react";
import VideoItem from "./components/VideoItem";
import VideoModal from "./components/VideoModal";

// Define the structure for your video data
interface Video {
  id: number;
  title: string;
  src: string;
  format: "16:9" | "9:16";
}

// Your video library. Add more videos here as needed.
const videos: Video[] = [
  {
    id: 1,
    title: "Where is the 5th dimension?",
    src: "/ani5th.mp4", // Assumes the video is in the /public folder
    format: "9:16",
  },
  // {
  //   id: 2,
  //   title: "GSAP Animation (Widescreen)",
  //   src: "/ani5th.mp4",
  //   format: "16:9",
  // },
  // Add more videos here in the future
  // { id: 3, title: "Another Video", src: "/another-video.mp4", format: "16:9" },
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleSelectVideo = (video: Video) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="w-full p-4 sm:p-6 md:p-8">
      {/* <h1 className="mb-8 text-center text-2xl text-white md:text-4xl">
        Video Gallery
      </h1> */}
      <div className="flex justify-center">
        <div className="grid grid-flow-row auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {videos.map((video) => (
            <VideoItem
              key={video.id}
              video={video}
              onSelect={() => handleSelectVideo(video)}
            />
          ))}
        </div>
      </div>

      <VideoModal video={selectedVideo} onClose={handleCloseModal} />
    </div>
  );
};

export default VideoGallery;
