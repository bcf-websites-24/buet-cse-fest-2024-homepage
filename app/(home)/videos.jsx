import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export const Videos = () => {
  return (
    <div className="container">
      <h3 className="header mt-48">Watch Our Old Videos</h3>

      <div className="grid grid-cols-2 gap-8">
        <HeroVideoDialog
          className="col-span-2 block rounded-xl h-full"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/Os5yeavDblk?si=hpQpV8L02S5h1WlF"
          thumbnailSrc="https://img.youtube.com/vi/Os5yeavDblk/hqdefault.jpg"
          thumbnailAlt="CSE Fest Video"
        />

        <HeroVideoDialog
          className="col-span-2 md:col-span-1 block rounded-xl h-full"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/VQa5Koy_V1w?si=XXF-8cMqLcdlrzO_"
          thumbnailSrc=""
          thumbnailAlt="CSE Fest Video"
        />

        <HeroVideoDialog
          className="col-span-2 md:col-span-1 block rounded-xl h-full"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/cuW9sGfrZc0?si=QOgY1TAfIvouV1Oj"
          thumbnailSrc="https://img.youtube.com/vi/cuW9sGfrZc0/hqdefault.jpg"
          thumbnailAlt="CSE Fest Video"
        />
      </div>
    </div>
  );
};
