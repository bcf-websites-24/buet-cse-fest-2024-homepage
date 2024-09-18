import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export const EventResources = ({ resources }) => {
  return (
    <div className="container">
      <h3 className="header mt-48">Resources & Workshops</h3>

      <div className="grid grid-cols-2 gap-8">
        {resources?.map((resource, index) => (
          <HeroVideoDialog
            key={index}
            className="block rounded-xl h-full"
            animationStyle="from-center"
            videoSrc={resource.videoSrc}
            thumbnailSrc={resource.thumbnail}
            thumbnailAlt="CSE Fest Video"
          />
        ))}
      </div>
    </div>
  );
};
