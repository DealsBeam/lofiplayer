const VideoBackground = ({bgVideoPath}) => {
  return (
    <div className="video-background">
      <video autoPlay muted loop id="video-background">
        <source src={`/stations/animated/${bgVideoPath}.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;