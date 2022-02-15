import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";

import Slider1 from './../../images/main-slider/slide1.jpg';
import Slider2 from './../../images/main-slider/slide2.jpg';
import Slider3 from './../../images/main-slider/slide3.jpg';


function SampleNextArrow(props) {
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
		<div className=" owl-prev la la-angle-left" onClick={onClick} style={{zIndex:1 }}/>
	</div>
  );
}

class HomeOwlSlider extends Component{
	
	render(){
		var settings = {		
			arrows: true,
			dots: true,
            slidesToShow: 1,			
            infinite: true,
			autoplay: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 1,
					
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 1,
					
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
			
			<Slider className="owl-slider owl-carousel owl-theme owl-none" {...settings}>
				<div className="item slide-item">
					<div className="slide-item-img"><img src='https://avatars.mds.yandex.net/get-altay/1618837/2a00000166ed09eca73941463c67f4f2361e/XXL' className="w-100" alt=""/></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-400">Начни говорить на английском<br />языке за 6 НЕДЕЛЬ<br/></h2>
								<p>САМЫЕ ЭФФЕКТИВНЫЕ КУРСЫ АНГЛИЙСКОГО ЯЗЫКА В БИШКЕКЕ
									Международная школа ILH(International language house) - одна из ведущих школ английского языка в Кыргызстане</p>
								<Link to ={"#"} className="site-button m-r10 white button-lg">Подробнее</Link>
								<Link to ={"#"} className="site-button outline outline-2 button-lg">Контакты</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><img src='https://mulino58.ru/wp-content/uploads/0/2/c/02c2f0d5f26eea769ade9fa16d56f439.jpg' className="w-100" alt=""/></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-400">Начни говорить на английском<br />языке за 16 НЕДЕЛЬ<br /></h2>
								<p>САМЫЕ ЭФФЕКТИВНЫЕ КУРСЫ АНГЛИЙСКОГО ЯЗЫКА В БИШКЕКЕ
									Международная школа ILH(International language house) - одна из ведущих школ английского языка в Кыргызстане</p>
								<Link to={"#"} className="site-button m-r10 white button-lg">Подробнее</Link>
								<Link to={"#"} className="site-button outline outline-2 button-lg">Контакты</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><img src='https://mulino58.ru/wp-content/uploads/5/8/e/58e24aaf458e46a28a3fd94c0c0cd677.jpg' className="w-100" alt=""/></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-400">Начни говорить на английском<br />языке за 4 НЕДЕЛЬ<br /></h2>
								<p>САМЫЕ ЭФФЕКТИВНЫЕ КУРСЫ АНГЛИЙСКОГО ЯЗЫКА В БИШКЕКЕ
									Международная школа ILH(International language house) - одна из ведущих школ английского языка в Кыргызстане</p>
								<Link to={"#"} className="site-button m-r10 white button-lg">Подробнее</Link>
								<Link to={"#"} className="site-button outline outline-2 button-lg">Контакты</Link>
							</div>
						</div>
					</div>
				</div>
			</Slider>	
		)
		
	}
	
}

export default HomeOwlSlider;