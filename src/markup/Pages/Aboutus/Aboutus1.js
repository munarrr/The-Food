import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import SectionCounter from './../../Element/SectionCounter';
import TestimonialCarousel from './../../Element/TestimonialCarousel';
import FormStyle from './../../Element/FormStyle';

//Images
import  about9 from './../../../images/about/pic9.jpg';
import bg2 from './../../../images/background/bg-map.jpg';
import services1 from './../../../images/our-services/pic1.jpg';
import services2 from './../../../images/our-services/pic2.jpg';
import bg1 from './../../../images/background/bg1.jpg';

import bnr from './../../../images/banner/bnr2.jpg';

class Aboutus1 extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(https://avatars.mds.yandex.net/get-altay/1923723/2a0000016ff08c71029f72920c8a054e22a9/XXL)" }}>
						<PageTitle motherMenu='О нас' activeMenu='О нас' />
					</div>	
                    <div className="content-block">
                        <div className="section-full content-inner-2">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h4 className="text-gray-dark m-b10">О нас</h4>
                                    <h2 className="box-title m-tb0">Мы создем будущее<span className="bg-primary"></span></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row ">
                                    <div className="col-lg-5 col-md-4 about-img">
                                        <img src={about9} data-tilt alt="" />
                                    </div>
                                    <div className="col-lg-7 col-md-8">
                                        <div className="abuot-box left row m-lr0 ">
                                            <div className="col-lg-4">
                                                <h2 className="box-title m-tb0">ILN - <span className="bg-primary"></span></h2>
                                                <h4 className="text-gray-dark">КУРСЫ АНГЛИЙСКОГО ЯЗЫКА</h4>
                                            </div>
                                            <div className="col-lg-8">
                                                <p>Языковая школа "ILH" - лицензированный образовательный центр с многолетними традицями преподавания иностранных языков.
                                                    Наша школа удобно расположена в самом центре Бишкека.</p>
                                                <p>"ILH" предлагает курсы иностранных языков для детей, подростков и взрослых, разработанные в соответсвии с требованиями времени по самым современным методикам и технологиям:</p>
                                                <p className="m-b0">INTERNATIONAL LANGUAGE HOUSE - международная школа английского языка, помогающая людям в изучении языка уже более 13 лет во всем мире!</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
						{ /* Counetr section */ }
							<SectionCounter />
						{ /* Counetr section End*/ }
							<VisionBlog />
							
                        {/* <!-- Testimonials --> */}
                        <div className="section-full content-inner" style={{ backgroundImage: "url(" + bg2 + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="box-title m-tb0">Отзывы от наших студентов<span className="bg-primary"></span></h2>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                                </div>
                                <div className="section-content m-b30 ">
                                    <TestimonialCarousel />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonials END --> */}
                        <div className="section-full overlay-primary-dark bg-img-fix" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                            <FormStyle />
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
function VisionBlog(){
	return(
		<>
			<div className="section-ful our-about-info content-inner-1 " style={{ backgroundImage: "url(" + bg2 + ")",backgroundPosition:"center" ,backgroundRepeat:"no-repeat" }}>
				<div className="container">
					<div className="section-head text-center">
						<h2 className="box-title m-tb0">Наша миссия и видение<span className="bg-primary"></span></h2>
						<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
					</div>
					<div className=" row dzseth  m-b30">
						<div className="col-lg-6 col-md-12 m-b30 about-img ">
							<img src={services1} data-tilt alt="" />
						</div>
						<div className="col-lg-6 col-md-12 m-b30 dis-tbl text-justify">
							<div className="dis-tbl-cell">
								<h3 className="box-title">Миссия<span className="bg-primary"></span></h3>
								<p className="font-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
								<p className="font-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
								<p className="font-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
							</div>
						</div>
					</div>
					<div className="row dzseth column-reverse">
						<div className="col-lg-6 col-md-12 dis-tbl text-justify">
							<div className="dis-tbl-cell">
                                <h3 className="box-title">Видение<span className="bg-primary"></span></h3>
								<p className="font-16">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 	make a type specimen book. 
								</p>
								<p className="font-16">	
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
								</p>
								<p className="font-16">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the	 industry's standard dummy text ever since the.
								</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-12 about-img ">
							<img src={services2} data-tilt alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}	

export {VisionBlog};
export default Aboutus1;