import React,{Component} from 'react';
import Header from './../Layout/Header1';
import Footer from './../Layout/Footer1';
import HomeOwlSlider from './../Element/HomeOwlSlider';
import HomeOwlSlider2 from './../Element/HomeOwlSlider2';
import ImgCarouselContent from './../Element/ImgCarouselContent';
import HomeTab from './../Element/HomeTab';
import Counter from './../Element/Counter';
import PortfolioCarousel from './../Element/PortfolioCarousel';
import TestimonialCarousel from './../Element/TestimonialCarousel';
import FormStyle from './../Element/FormStyle';

//Images
import pic4 from './../../images/about/pic4.jpg';
import bgimg from './../../images/background/bg1.jpg';
import bgimg2 from './../../images/background/bg-map.jpg';
import bgimg3 from './../../images/background/bg1.jpg';
import Faqs from '../Element/Faq/Faq';


class Homepage extends Component{	
	componentDidMount() {
		
	}	
	
	render(){
		return(
			<div className="page-wraper">
				<Header />
				<div className="page-content bg-white">
					{/*  Slider Banner */}
					<div className="owl-slider-banner main-slider">
						<HomeOwlSlider />
						{/*  Service   */}
						<div className="service-box-slide">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<ImgCarouselContent />
									</div>
								</div>
							</div>
						</div>
						{/*  Service End  */}
					</div>
					{/*  Slider Banner */}
					<div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full bg-white content-inner-1 about-us">
                            <div className="container">
                                <div className="row ">
                                    <div className="col-lg-7 col-md-8">
                                        <div className="abuot-box row" >
                                            <div className="col-lg-4">
                                                <h2 className="box-title m-tb0">О нас<span className="bg-primary"></span></h2>
                                                <h4 className="text-gray-dark">Языковая школа "ILH" </h4>
                                            </div>
                                            <div className="col-lg-8">
                                                <p>
                                                    Наша школа удобно расположена в самом центре Бишкека.
                                                    "ILH" предлагает курсы иностранных языков для детей, подростков и взрослых, разработанные в соответсвии с требованиями времени по самым современным методикам и технологиям:
                                                    INTERNATIONAL LANGUAGE HOUSE - международная школа английского языка, помогающая людям в изучении языка уже более 13 лет во всем мире!
                                                    В основе курса лежит коммуникативная методика, доказавшая эффективность во всем мире.
                                                    Входим в ТОП-3 школ по изучении иностранных языков.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-4 about-img" >
                                        <img src={pic4} data-tilt alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- About Us End --> */}
						{/* <!-- Our Services --> */}
                        <div className="section-full content-inner-2">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h4 className="text-gray-dark m-b10">Что мы предлегаем</h4>
                                    <h2 className="box-title m-tb0">6 ПРИЧИН УЧИТЬСЯ АНГЛИЙСКОМУ ЯЗЫКУ У НАС<span className="bg-primary"></span></h2>
                                    <p>АВТОРСКАЯ РАЗРАБОТКА НА ОСНОВЕ СОВРЕМЕННЫХ МЕТОДОВ ТОЛЬКО ЭФФЕКТИВНОЕ ОБУЧЕНИЕ!</p>
                                </div>
                            </div>
                            <div className="development-box">
                                <div className="container">
                                    <HomeOwlSlider2 />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}
						{/* <!-- Why Chose Us --> */}
                        <div className="section-full content-inner-1 overlay-primary choseus-tabs  bg-img-fix" style={{ backgroundImage: "url(" + bgimg + ")" }}>
                            <div className="container">
                                <div className="section-head text-white text-center">
                                    <h2 className="box-title m-tb0">Почему мы<span className="bg-primary"></span></h2>
                                    <p>Мы лицензированный языковой центр, работающий по программам, которые полностью отвечают требованиям Министерства образования и науки КР. Центр признан на государственном уровне и имеет право на выдачу сертификата, подтверждающего уровень владения иностранным языком</p>
                                </div>
                            </div>
							<HomeTab />
							<div className="choses-info text-white">
                                <Counter />
                            </div>
						</div>	
						{/* <!-- Why Chose Us End --> */}
						{/* <!-- Our Portfolio --> */}
                        <div className="section-full content-inner-1 mfp-gallery">
                            <div className="container-fluid">
                                <div className="section-head text-center">
                                    <h4 className="text-gray-dark m-b10">Галерея нашего курса</h4>
                                    <h2 className="box-title m-tb0">Эти не просто фотки за ними стоят целые история<span className="bg-primary"></span></h2>
                                <h5>Хочешь чтобы твоя фото тоже оказался здесь</h5>
                                </div>
                                    <PortfolioCarousel />
                            </div>
                        </div>
                        {/* <!-- Our Portfolio END --> */}
						{/* <!-- Testimonials --> */}
                        <div className="section-full content-inner" style={{ backgroundImage: "url(" + bgimg2 + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="box-title m-tb0">Отзывы от наших студентов<span className="bg-primary"></span></h2>
                                    <p> Что говорят о курсах BSC Kyrgyzstan</p>
                                </div>
                                <div className="section-content m-b30 ">
                                    <TestimonialCarousel />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonials END --> */}
                        <div className="section-full">
                            <div className="container">                                               
                                   <Faqs />                         
                            </div>
                        </div>
						{/* <!-- Get in touch --> */}
                        <div className="section-full overlay-primary-dark bg-img-fix" style={{ backgroundImage: "url(" + bgimg3 + ")" }}>
                            <FormStyle />
                        </div>
                        {/* <!-- Get in touch --> */}
						
					</div>
				</div>	
				<Footer />
				
			</div>		
		)
	}
}
export default Homepage;