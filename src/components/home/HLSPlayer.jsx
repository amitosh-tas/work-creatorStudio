import { focusOutline } from "./shared"

export default function HLSPlayer({ src, poster, posterSet, posterSizes }) {
  return (
    <hero-hls-player data-src={src} className="peer relative block aspect-video bg-neutral-900 data-playing:z-10">
      <div data-poster>
        <img
          className="block h-auto w-full"
          src={poster}
          srcSet={posterSet}
          sizes={posterSizes}
          alt=""
          width="768"
          height="432"
          fetchPriority="high"
        />
        <button
          type="button"
          data-play
          aria-label="Play course introduction"
          className={`absolute top-1/2 left-1/2 grid h-11.5 w-16.5 -translate-1/2 cursor-pointer place-items-center rounded-control bg-black/55 after:border-y-8 after:border-l-14 after:border-y-transparent after:border-l-white ${focusOutline}`}
        />
      </div>
      <video hidden controls playsInline preload="none" tabIndex={0} aria-label="Course introduction" className="absolute inset-0 size-full bg-black" />
      <select hidden aria-label="Video quality" className={`absolute top-2 right-2 rounded-md bg-black/80 px-2 py-1 text-sm text-white ${focusOutline}`}>
        <option value="-1">Auto</option>
      </select>
      <p data-video-status role="status" className="pointer-events-none absolute inset-x-2 top-2 mx-auto w-fit rounded-md bg-black/80 px-2 py-1 text-center text-sm text-white empty:hidden" />
    </hero-hls-player>
  )
}
