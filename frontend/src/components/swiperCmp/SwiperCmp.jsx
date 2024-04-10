import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import bagImg from './../../img/range/bag.svg'
import containerImg from './../../img/range/container.svg'
import cupImg from './../../img/range/cup.svg'
import papperPackImg from './../../img/range/papper-pack.svg'
import petPackImg from './../../img/range/pet-pack.svg'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const SwiperCmp = () => {
return (
	<Swiper
		modules={[Navigation, Pagination, Scrollbar, A11y]}
		spaceBetween={50}
		slidesPerView={3}
		navigation
		pagination={{ clickable: true }}
		scrollbar={{ draggable: true }}
		onSwiper={(swiper) => console.log(swiper)}
		onSlideChange={() => console.log('slide change')}
	>
		<SwiperSlide>
			<div className="img__wrapper">
				<img src={bagImg} alt="" />
			</div>
		</SwiperSlide>
		
		<SwiperSlide>
			<div className="img__wrapper">
				<img src={containerImg} alt="" />
			</div>
		</SwiperSlide>

		<SwiperSlide>
		<div className="img__wrapper">
			<img src={cupImg} alt="" />
		</div>
		</SwiperSlide>

		<SwiperSlide>
		<div className="img__wrapper">
			<img src={papperPackImg} alt="" />
		</div>

		</SwiperSlide>

		<SwiperSlide>
		<div className="img__wrapper">
			<img src={petPackImg} alt="" />
		</div>

		</SwiperSlide>

	</Swiper>
	);
};


export default SwiperCmp