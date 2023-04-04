import React, { useEffect, useState } from "react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import BookCard from "../bookCard/BookCard";
import Error from "../error/Error";
import Label from "../label/Label";
import Load from "../load/Load";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Books.scss";

SwiperCore.use([Pagination]);

function Books({ books, info ,link}) {
	const [swiper, setSwiper] = useState(null);
	const [swiperCount, setSwiperCount] = useState(4);
	useEffect(() => {
		if(window.innerWidth < 575){
			setSwiperCount(3)
		}
	}, [window.innerWidth]);
	return (
		<div className="books-container " id="books">
			<div className="books-container__box">
				<Label info={info} link={link} />
			</div>
			<Error />
			<Load />
			<div className="books-container__row">
				<Swiper
					onSwiper={(swiper) => {
						setSwiper(swiper);
					}}
					slidesPerView={swiperCount}
					modules={[Navigation]}
					className="book-slider">
					{books.length &&
						books.map((book, index) => (
							<SwiperSlide  key={index}>
								<BookCard key={index} book={book} />
							</SwiperSlide>
						))}
				</Swiper>

				<div className="swiper-container">
						<ChevronLeftOutlinedIcon
							className="swiper-button"
							onClick={() => {
								swiper.slidePrev();
							}}
						/>
					<ChevronRightOutlinedIcon
						className="swiper-button"
						onClick={() => {
							swiper.slideNext();
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default Books;
