import React, {Component} from 'react';
import Slider from "react-slick";

//Images
import pic1 from './../../images/testimonials/pic1.jpg';
import pic2 from './../../images/testimonials/pic2.jpg';
import pic3 from './../../images/testimonials/pic3.jpg';
import Videoimg from './../../images/video/pic1.jpg';



class TestimonialCarousel extends Component{
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 3,		
            infinite: true,
			dots: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow:1,
				  }
				}
			]
        };
		return(
			<>
				<Slider className="testimonial-box center-active-owl item-center owl-loaded owl-carousel owl-none  owl-dots-black-full " {...settings}>
					<div className="item">
						<div className="testimonial-8">
							<div className="testimonial-text">
								<p>
									Я Азамов Нурсултан, учусь в лицее имени Ч.Айтматова, на данный момент я хожу на языковые курсы компании Логос. Обучение проходит на уровне, все понятно, легко и доступно. Я уже посещаю вторую неделю и написал сегодня пробный TOEFL Exam мне все понравилось, оплата на приемлемом уровне и желающие можете записаться и написать  IELTS, TOEFL.
								</p>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src={pic1} width="100" height="100" alt="" />
								</div>
								<h5 className="testimonial-name m-t0 m-b5">Азамов Нурсултан</h5> 
								<span>17 лет</span> 
							</div>
						</div>
					</div>
					<div className="item">
						<div className="testimonial-8">
							<div className="testimonial-text ">
								<div className="video-testimonial">
									<img src={Videoimg} alt="" />
									<div className="video-testimonial-play">
										<a href="https://www.youtube.com/watch?v=xqUM6DayZcw" className="popup-youtube video" title="Image Title Come Here"><i className="ti-control-play"></i></a>
									</div>
								</div>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src={pic2} width="100" height="100" alt="" />
								</div>
								<h5 className="testimonial-name m-t0 m-b5">Мээрим Мийзамова</h5>
								<span>25 лет</span>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="testimonial-8">
							<div className="testimonial-text">
								<p>Здравствуйте! Меня зовут Бермет, я училась в компании Логос и моей учительницей была Мисс Ольга, я ходила на подготовительные курсы на IELTS и со своими результатами осталась  довольна. Мне нравится коллектив, атмосфера и это не тот курс где вам просто отдали книги и сами зубрите а будут гонять и вы увидите результаты.</p>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src={pic3} width="100" height="100" alt="" />
								</div>
								<h5 className="testimonial-name m-t0 m-b5">Азамов Нурсултан</h5>
								<span>17 лет</span>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="testimonial-8">
							<div className="testimonial-text ">
								<div className="video-testimonial">
									<img src={Videoimg} alt="" />
									<div className="video-testimonial-play">
										<a href="https://www.youtube.com/watch?v=xqUM6DayZcw" className="popup-youtube video" title="Image Title Come Here"><i className="ti-control-play"></i></a>
									</div>
								</div>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src={pic2} width="100" height="100" alt="" />
								</div>
								<h5 className="testimonial-name m-t0 m-b5">Мадалиева Алтынай</h5>
								<span>Client</span>
							</div>
						</div>
					</div>
					
				</Slider>
			</>
		)
	}
	
}

export default TestimonialCarousel;