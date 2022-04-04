import { Swiper } from "swiper/react";

// Import Swiper styles
import "../style/swiper.css";
import { ReactChild, ReactFragment, ReactPortal } from "react";

function MobileLayout(props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) {
  return <div className={`border-box px-3`}>
    <Swiper className="cmp-swiper-wrapper">
      {props.children}
    </Swiper>
  </div>
}

export default MobileLayout
