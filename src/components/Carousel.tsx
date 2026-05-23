import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ─────────────────────────────────────────────
   Carousel
───────────────────────────────────────────── */
interface CarouselProps {
  images: string[];
  alt: string;
  /** fallback placeholder if an image fails to load */
  placeholderColor?: string;
}

export function Carousel({ images, alt, placeholderColor = "111827" }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  const handleImgError = (idx: number) =>
    setImgErrors((prev) => ({ ...prev, [idx]: true }));

  return (
    <div className="relative w-full h-full group/carousel">
      <div className="overflow-hidden w-full h-full rounded-[inherit]" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, idx) => (
            <div key={idx} className="flex-[0_0_100%] h-full min-w-0">
              {imgErrors[idx] ? (
                <div
                  className="w-full h-full flex items-center justify-center text-xs font-medium"
                  style={{
                    background: `#${placeholderColor}`,
                    color: "#00D4FF",
                  }}
                >
                  {alt} · {idx + 1}
                </div>
              ) : (
                <img
                  src={src}
                  alt={`${alt} screenshot ${idx + 1}`}
                  className="w-full h-full object-cover"
                  onError={() => handleImgError(idx)}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next */}
      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            aria-label="Previous screenshot"
            className="absolute left-1.5 top-1/2 -translate-y-1/2 z-10 h-7 w-7 rounded-full bg-black/50 text-white flex items-center justify-center
                       opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/70"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next screenshot"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 z-10 h-7 w-7 rounded-full bg-black/50 text-white flex items-center justify-center
                       opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/70"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex gap-1 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              aria-label={`Go to screenshot ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                selectedIndex === idx
                  ? "w-4 bg-primary"
                  : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   BrowserFrame
───────────────────────────────────────────── */
interface FrameProps {
  children: React.ReactNode;
}

export function BrowserFrame({ children }: FrameProps) {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-border/60 shadow-[0_8px_32px_-8px_hsla(190,100%,50%,0.25)] bg-[hsl(221,39%,9%)]">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[hsl(221,39%,7%)] border-b border-border/40">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        <div className="ml-2 flex-1 h-4 rounded bg-white/5 max-w-[180px]" />
      </div>
      {/* Viewport */}
      <div className="aspect-[16/9] w-full overflow-hidden">{children}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PhoneFrame
───────────────────────────────────────────── */
export function PhoneFrame({ children }: FrameProps) {
  return (
    <div className="relative mx-auto w-[160px] rounded-[2rem] border-[3px] border-border/70 bg-[hsl(221,39%,9%)] shadow-[0_8px_32px_-8px_hsla(190,100%,50%,0.25)] overflow-hidden">
      {/* Notch */}
      <div className="h-5 flex items-center justify-center bg-[hsl(221,39%,7%)] border-b border-border/40">
        <div className="h-2 w-12 rounded-full bg-white/10" />
      </div>
      {/* Screen */}
      <div className="aspect-[9/16] w-full overflow-hidden">{children}</div>
      {/* Home bar */}
      <div className="h-4 flex items-center justify-center bg-[hsl(221,39%,7%)]">
        <div className="h-1 w-10 rounded-full bg-white/20" />
      </div>
    </div>
  );
}
