import SwiperCore, { Autoplay } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
export { SwiperSlide as SwiperItem } from 'swiper/react';

import { useIsDomReady } from 'src/hooks/dom-ready';
import { useViewport } from 'src/hooks/viewport';
import { useOffset } from 'src/hooks/offset';
import { ISwiperProps } from './interface';
import { IBreakpoints } from 'src/themes/interface';

// Inject Autoplay
SwiperCore.use([Autoplay]);

/**
 * default values
 */
const AUTOPLAY_DELAY = 4; // in seconds;
const SPACE_BETWEEN: IBreakpoints = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  '2xl': 24,
};
const SHOW_ITEMS: IBreakpoints = {
  sm: 1.2,
  md: 2,
  lg: 3,
  xl: 4,
  '2xl': 4,
};

/**
 * @param {object} ISwiperProps
 * @returns JSX.Element | null
 */
const Carousel = ({
  children,
  isLoop = false,
  isCenter = false,
  autoPlay = false,
  pauseOnHover = false,
  haveOffset = false,
  spaceBetween = SPACE_BETWEEN,
  showItems = SHOW_ITEMS,
  speed = 800,
}: ISwiperProps): JSX.Element | null => {
  // custom hooks
  const { container } = useViewport();
  const offset = useOffset();

  /**
   * Used for - react hydration.
   * https://nextjs.org/docs/messages/react-hydration-error
   */
  const isDomReady = useIsDomReady();

  // autoplay
  const autoplaySettings = {
    delay: AUTOPLAY_DELAY * 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: pauseOnHover,
  };

  // check isDomReady
  if (!isDomReady) return null;

  // style implement for offset layout
  let style = {};
  if (haveOffset) style = { paddingLeft: offset, paddingRight: offset };

  return (
    <div>
      <Swiper
        style={style}
        speed={speed}
        loop={isLoop}
        autoplay={autoPlay && autoplaySettings}
        centeredSlides={isCenter}
        slidesPerView={showItems[container]}
        spaceBetween={spaceBetween[container]}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Carousel;
