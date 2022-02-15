import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";

/* function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next la la-angle-right"  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
	<div className="owl-nav">
		<div className=" owl-prev la la-angle-left" onClick={onClick}/>
	</div>
  );
} */

class EventSlider extends Component{	
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 4,	
			speed: 1500,
			navSpeed: 1500,	
            infinite: true,
			autoplay: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 4,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
        };
		return(
			<Slider className="img-carousel-content owl-carousel owl-none" {...settings}>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="item-service-content m-b40">
							<h5>98,8% реальный результат</h5>
							<p className="m-b0">Мы регулярно проводим конроль качества преподавания и мониторинг полученных знаний</p>
						</div>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="icon-bx-md radius border-1 m-t40 m-b20"> 
							<span className="icon-cell"><i className="flaticon-devices"></i></span> 
						</div>
						<Link to={'services-details'} className="site-button outline outline-2"><span className="font-weight-500">Read More</span></Link>
					</div>
				</div>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="icon-bx-md radius border-1 m-b20 m-t0"> 
							<span className="icon-cell"><i className="flaticon-pen"></i></span> 
						</div>
						<Link to={'services-details'} className="site-button outline outline-2 m-b40"><span className="font-weight-500">Read More</span></Link>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="item-service-content m-t40">
							<h5>Утренние, дневные, вечерние группы</h5>
							<p className="m-b0">Каждому студенту мы поможем подобрать наиболее подходящее время занятий</p>
						</div>
					</div>
				</div>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="item-service-content m-b40">
							<h5>Компенсация занятий при пропуске</h5>
							<p className="m-b0">Если Вы пропустили занятия, мы компенсируем их, добавив дополнительно к курсу обучения</p>
						</div>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="icon-bx-md radius border-1 m-t40 m-b20"> 
							<span className="icon-cell"><i className="flaticon-smartphone"></i></span> 
						</div>
						<Link to={'services-details'} className="site-button outline outline-2"><span className="font-weight-500">Read More</span></Link>
					</div>
				</div>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="icon-bx-md radius border-1 m-b20 m-t0"> 
							<span className="icon-cell"><i className="flaticon-team"></i></span> 
						</div>
						<Link to={'services-details'} className="site-button outline outline-2 m-b40"><span className="font-weight-500">Read More</span></Link>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="item-service-content m-t40">
							<h5>Занятия в мини-группах</h5>
							<p className="m-b0">Мы проводим занятия в группах до 12 человек, благодаря чему каждому уделяется достаточно внимания</p>
						</div>
					</div>
				</div>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="item-service-content m-b40">
							<h5>Доступные цены</h5>
							<p className="m-b0">Цены на обучение в нашей школе начинаются с 990 сом за месяц</p>
						</div>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="icon-bx-md radius border-1 m-t40 m-b20"> 
							<span className="icon-cell"><i className="flaticon-smartphone"></i></span> 
						</div>
						<Link to={'services-details'} className="site-button outline outline-2"><span className="font-weight-500">Read More</span></Link>
					</div>
				</div>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="icon-bx-md radius border-1 m-b20 m-t0"> 
							<span className="icon-cell"><i className="flaticon-team"></i></span> 
						</div>
						<Link to={'services-details'} className="site-button outline outline-2 m-b40"><span className="font-weight-500">Read More</span></Link>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="item-service-content m-t40">
							<h5>Быстрый результат - за 1 месяц</h5>
							<p className="m-b0">Вам не придется ждать 4-6 месяцев, пока вы что-то сможете рассказать. Уже на первом занятии вы будете говорить. Через 1 месяц сможете общаться в рамках простых времен!</p>
						</div>
					</div>
				</div>
				
			</Slider>			
		)
		
	}
	
}

export default EventSlider;