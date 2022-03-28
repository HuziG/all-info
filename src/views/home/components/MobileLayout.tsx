import { Swiper, SwiperSlide } from "swiper/react";
import { HomeComponent } from '../../../interface/home.component.interface';
import AsyncComponent from '../../../components/import';

// Import Swiper styles
import "swiper/css";

import "../style/swiper.css";

function MobileLayout (props: { componentsList: HomeComponent[] }) {
  return <div className={`border-box px-3`}>
    <Swiper className="cmp-swiper-wrapper" loop>
      {props.componentsList.length > 0 &&
        props.componentsList.map((item: HomeComponent) => (
          <SwiperSlide key={item.name} data-grid={item.grid} className={`overflow-hidden`}>
            <AsyncComponent name={item.name} data={item} />
          </SwiperSlide>
      ))}
    </Swiper>
  </div>
}

export default MobileLayout
