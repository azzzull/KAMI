import { ArrowRight, Image as ImageIcon, Play } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageModal } from '../components/ImageModal';
import { MediaThumbnail } from '../components/MediaThumbnail';
import { SectionHeading } from '../components/SectionHeading';
import { VideoModal } from '../components/VideoModal';
import { categories, projectShowcase } from '../data/site';
import fourLifeIndonesiaConvention from '../assets/videos/4life-indonesia-convention.mp4';
import fourLifeUsConvention from '../assets/videos/4life-us-convention.mp4';

type MediaItem = {
  type: 'photo' | 'video';
  title: string;
  src: string;
  thumb: string;
  category: string;
  href?: string;
};

type MediaColumn = {
  id: string;
  items: MediaItem[];
  widthClass: string;
};

const extraVideoItems: MediaItem[] = [
  {
    type: 'video',
    title: '4Life Indonesia Convention',
    src: fourLifeIndonesiaConvention,
    thumb: fourLifeIndonesiaConvention,
    category: 'Video Highlight',
  },
  {
    type: 'video',
    title: '4Life US Convention',
    src: fourLifeUsConvention,
    thumb: fourLifeUsConvention,
    category: 'Video Highlight',
  },
];

const columnWidthClasses = [
  'w-[10rem] sm:w-[12rem] lg:w-[14rem]',
  'w-[8.5rem] sm:w-[10rem] lg:w-[12rem]',
  'w-[12rem] sm:w-[14rem] lg:w-[16rem]',
  'w-[9.5rem] sm:w-[11rem] lg:w-[13rem]',
  'w-[11rem] sm:w-[13rem] lg:w-[15rem]',
];

const columnPatterns = [2, 3, 2, 3, 2, 3];

const tileHeightClasses = [
  ['flex-[10]', 'flex-[8]'],
  ['flex-[6]', 'flex-[7]', 'flex-[7]'],
  ['flex-[8]', 'flex-[10]'],
  ['flex-[7]', 'flex-[6]', 'flex-[7]'],
  ['flex-1', 'flex-1'],
  ['flex-[6]', 'flex-[8]', 'flex-[6]'],
];

function getPortfolioMedia() {
  const photos = new Map<string, MediaItem>();
  const videos = new Map<string, MediaItem>();

  const addPhoto = (src: string, title: string, category: string, href?: string) => {
    if (!photos.has(src)) {
      photos.set(src, { type: 'photo', src, thumb: src, title, category, href });
    }
  };

  const addVideo = (src: string | undefined, thumb: string, title: string, category: string) => {
    if (src && !videos.has(src)) {
      videos.set(src, { type: 'video', src, thumb, title, category });
    }
  };

  projectShowcase.forEach((project) => {
    addPhoto(project.image, project.title, project.category, `/portfolio/${project.slug}`);
    project.gallery.forEach((image) => addPhoto(image.src, image.title, project.category, `/portfolio/${project.slug}`));
    addVideo(project.videoSrc, project.videoThumb, project.videoTitle, project.category);
  });

  categories.forEach((category) => {
    addPhoto(category.image, category.title, category.title);
    category.gallery.forEach((image) => addPhoto(image.src, image.title, category.title));
    addVideo(category.videoSrc, category.videoThumb, category.videoTitle, category.title);
  });

  extraVideoItems.forEach((item) => videos.set(item.src, item));

  const photoItems = [...photos.values()];
  const videoItems = [...videos.values()];
  const mediaItems: MediaItem[] = [];
  const maxLength = Math.max(photoItems.length, videoItems.length * 4);

  for (let index = 0; index < maxLength; index += 1) {
    const photo = photoItems[index];
    if (photo) mediaItems.push(photo);

    if ((index + 1) % 4 === 0) {
      const video = videoItems[Math.floor(index / 4)];
      if (video) mediaItems.push(video);
    }
  }

  videoItems.slice(Math.ceil(photoItems.length / 4)).forEach((video) => mediaItems.push(video));

  return mediaItems.map((item, index) => ({
    ...item,
    featured: index % 9 === 0 || index % 9 === 4,
  }));
}

function getMediaColumns(items: MediaItem[]) {
  const columns: MediaColumn[] = [];
  let itemIndex = 0;
  let columnIndex = 0;

  while (itemIndex < items.length) {
    const preferredSize = columnPatterns[columnIndex % columnPatterns.length];
    const remaining = items.length - itemIndex;
    const size = remaining <= 3 ? remaining : remaining === 4 ? 2 : preferredSize;

    const columnItems = items.slice(itemIndex, itemIndex + size);
    columns.push({
      id: `${columnItems[0].src}-${columnIndex}`,
      items: columnItems,
      widthClass: columnWidthClasses[columnIndex % columnWidthClasses.length],
    });
    itemIndex += size;
    columnIndex += 1;
  }

  return columns;
}

export function PortfolioSection() {
  const mediaItems = useMemo(() => {
    const items = getPortfolioMedia();
    return items.length % 2 === 0 ? items : items.slice(0, -1);
  }, []);
  const mediaColumns = useMemo(() => getMediaColumns(mediaItems), [mediaItems]);
  const loopingColumns = useMemo(() => [...mediaColumns, ...mediaColumns], [mediaColumns]);
  const [activeVideo, setActiveVideo] = useState<MediaItem | null>(null);
  const [activeImage, setActiveImage] = useState<MediaItem | null>(null);

  const renderMediaTile = (item: MediaItem, heightClass: string, duplicateIndex: number) => {
    const content = (
      <>
        <MediaThumbnail
          src={item.thumb}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.06] group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/82 via-slate-950/10 to-transparent transition duration-300 group-hover:from-slate-950/90" />
        <div className="absolute left-1.5 top-1.5 inline-flex items-center gap-1 rounded-full border border-white/20 bg-slate-950/35 px-1.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-white/80 backdrop-blur sm:left-2 sm:top-2">
          {item.type === 'video' ? <Play className="h-2.5 w-2.5 fill-white" /> : <ImageIcon className="h-2.5 w-2.5" />}
          {item.type === 'video' ? 'Video' : 'Photo'}
        </div>
        {item.type === 'video' ? (
          <div className="absolute inset-0 grid place-items-center">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-white/20 sm:h-9 sm:w-9">
              <Play className="h-3.5 w-3.5 fill-white" />
            </span>
          </div>
        ) : null}
        <div className="absolute bottom-1.5 left-1.5 right-1.5 text-white opacity-0 transition duration-300 group-hover:opacity-100 sm:bottom-2 sm:left-2 sm:right-2">
          <p className="text-[7px] font-semibold uppercase tracking-[0.16em] text-white/55">{item.category}</p>
          <h3 className="mt-0.5 line-clamp-2 text-[10px] font-bold leading-tight tracking-tight sm:text-xs">{item.title}</h3>
        </div>
      </>
    );

    return (
      <button
        key={`${duplicateIndex}-${item.type}-${item.src}`}
        type="button"
        onClick={() => (item.type === 'video' ? setActiveVideo(item) : setActiveImage(item))}
        className={`group relative block w-full overflow-hidden bg-slate-950 text-left shadow-[0_8px_20px_rgba(17,24,39,0.12)] transition-all duration-300 hover:z-10 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_18px_44px_rgba(17,24,39,0.2)] ${heightClass}`}
      >
        {content}
      </button>
    );
  };

  return (
    <section id="portfolio" className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-10 lg:px-8">
        <SectionHeading
          eyebrow="Moments We're Proud Of"
          title="Every event begins as an idea."
          description="Through thoughtful planning, creative execution, and a lot of teamwork, those ideas become experiences that people remember. Here are a few highlights of the moments we've been proud to be part of."
          align="center"
        />

      </div>

      <div className="relative mt-8 w-full overflow-hidden sm:mt-10">
        <div className="portfolio-collage-mask">
          <div className="portfolio-collage-track flex w-max gap-1">
            {loopingColumns.map((column, columnIndex) => {
              const pattern = tileHeightClasses[columnIndex % tileHeightClasses.length];
              return (
                <div key={`${column.id}-${columnIndex}`} className={`flex h-[14rem] shrink-0 flex-col gap-1 sm:h-[16rem] lg:h-[20rem] ${column.widthClass}`}>
                  {column.items.map((item, itemIndex) => renderMediaTile(item, pattern[itemIndex % pattern.length], columnIndex))}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-7 flex justify-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#EC198B,#6B1FAF,#1E3FAE)] px-7 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(107,31,175,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
          >
            More Moments
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <VideoModal
        open={Boolean(activeVideo)}
        title={activeVideo?.title ?? ''}
        src={activeVideo?.src ?? ''}
        onClose={() => setActiveVideo(null)}
      />
      <ImageModal
        open={Boolean(activeImage)}
        title={activeImage?.title ?? ''}
        src={activeImage?.src ?? ''}
        onClose={() => setActiveImage(null)}
      />
    </section>
  );
}
