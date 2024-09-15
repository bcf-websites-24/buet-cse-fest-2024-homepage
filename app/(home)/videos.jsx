import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export const Videos = () => {
  return (
    <div className="container">
      <h3 className="header mt-48">Videos</h3>

      <div className="grid grid-cols-2 gap-8">
        <HeroVideoDialog
          className="col-span-2 block rounded-xl h-full"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/UjdREuYhSx8?si=rCC7x84JIoVmvNSZ"
          thumbnailSrc="https://img.youtube.com/vi/UjdREuYhSx8/hqdefault.jpg"
          thumbnailAlt="CSE Fest Video"
        />

        <HeroVideoDialog
          className="col-span-2 md:col-span-1 block rounded-xl h-full"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/09839DpTctU?si=yAc9YzlT6X-XhpXs"
          thumbnailSrc="https://img.youtube.com/vi/09839DpTctU/hqdefault.jpg"
          thumbnailAlt="CSE Fest Video"
        />

        <HeroVideoDialog
          className="col-span-2 md:col-span-1 block rounded-xl h-full"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/PA7DKlXCYdU?si=QFl_9hLvKHOs_a5e"
          thumbnailSrc="https://img.youtube.com/vi/PA7DKlXCYdU/hqdefault.jpg"
          thumbnailAlt="CSE Fest Video"
        />
      </div>
    </div>
  );
};

// https://i.ytimg.com/vi/UjdREuYhSx8?si=6SdxNe6LFq_wsN8x/default.jpg

//<iframe width="560" height="315" src="https://www.youtube.com/embed/UjdREuYhSx8?si=rCC7x84JIoVmvNSZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
