import React from 'react';
import Marquee from 'react-fast-marquee';

const seasons = [
  { name: "Valentine's Day", video: 'https://apc-assets-2025.s3.ap-northeast-1.amazonaws.com/apc_videos/valentine.mp4' },
  { name: "Summer", video: 'https://apc-assets-2025.s3.ap-northeast-1.amazonaws.com/apc_videos/summer.mp4' },
  { name: "Mardi Gras", video: 'https://apc-assets-2025.s3.ap-northeast-1.amazonaws.com/apc_videos/mardi.mp4' },
  { name: "Easter", video: 'https://apc-assets-2025.s3.ap-northeast-1.amazonaws.com/apc_videos/easter.mp4' },
  { name: "4th July", video: 'https://apc-assets-2025.s3.ap-northeast-1.amazonaws.com/apc_videos/4th.mp4' },
  { name: "Ramadan/Eid", video: 'https://apc-assets-2025.s3.ap-northeast-1.amazonaws.com/apc_videos/ramadan.mp4' },
  { name: "Halloween", video: 'https://apc-assets-2025.s3.ap-northeast-1.amazonaws.com/apc_videos/halloween.mp4' },
  { name: "Christmas", video: 'https://apc-assets-2025.s3.ap-northeast-1.amazonaws.com/apc_videos/christmas.mp4' },
  { name: "New Year", video: 'https://apc-assets-2025.s3.ap-northeast-1.amazonaws.com/apc_videos/newyear.mp4' },
];

const VideoCarousel = () => {
  return (
    <div className="w-full flex items-center justify-center h-[500px] py-6">
      <Marquee direction="right" gradient={false} speed={45} pauseOnHover={false} drag="free">
        {seasons.map((item, index) => (
          <div key={index} className="mx-4 min-w-[200px] text-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="cursor-pointer rounded-xl w-[300px] h-[400px] object-cover shadow-lg"
              title={item.name}
            >
              <source src={item.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="mt-2 text-3xl font-[Inter] text-[#514747] font-bold">{item.name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default VideoCarousel;
