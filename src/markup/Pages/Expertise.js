import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header1';
import Footer from './../Layout/Footer1';
import PageTitle from './../Layout/PageTitle';
import SectionCounter from './../Element/SectionCounter';
import TestimonialCarousel from './../Element/TestimonialCarousel';
import FormStyle from './../Element/FormStyle';
import Team from '../Element/Team/Team'

//Images
import  bnr1 from './../../images/banner/bnr5.jpg';
import  kyr from './../../images/expertise/kyr.png';
import  kaz from './../../images/expertise/kaz.png';
import  eng from './../../images/expertise/eng.png';
import  rus from './../../images/expertise/rus.png';
import  kor from './../../images/expertise/kor.png';
import  turk from './../../images/expertise/turk.png';

import bg1 from './../../images/background/bg1.jpg';
import bgmap from './../../images/background/bg-map.jpg';

const imageBlog = [
	{image: kyr, title: 'Кыргыз тили',text:"mcsdmcksdmcksmdkcmsdk" },
	{image: kaz, title: 'Казакский язык',text:"mcsdmcksdmcksmdkcmsdk" },
	{image: eng, title: 'English',text:"mcsdmcksdmcksmdkcmsdk" },
	{image: rus, title: 'Русский',text:"mcsdmcksdmcksmdkcmsdk" },
	{image: kor, title: 'Корейский язык',text:"mcsdmcksdmcksmdkcmsdk" },
    { image: turk, title: 'Turkish',text:"mcsdmcksdmcksmdkcmsdk" }
]
	

class Expertise extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
                        <PageTitle motherMenu='Expertise' activeMenu='Expertise' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 col-md-7">
                                        <div className="section-head text-black">
                                            <h4 className="text-gray-dark font-weight-300 m-b10">Expertise</h4>
                                            <h2 className="box-title m-tb0">Completely customizable high-quality robust websites<span className="bg-primary"></span></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                        <div className="row serv">
											{imageBlog.map((data,index)=>(
												<div className="col-lg-6 col-md-12 col-sm-6 m-b30">
													<div className="icon-bx-wraper expertise  bx-style-1 p-a30 center">
														<div className="icon-lg m-b20"> <Link to={"#"} className="icon-cell"><img src={data.image} alt=""/></Link> </div>
														<div className="icon-content">
															<h5 className="dlab-tilte text-uppercase"><Link to={"#"}>{data.title}</Link></h5>
                                                            <p>{ data.text}</p>
														</div>
													</div>
												</div>
											))}
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-5 sticky-top">
                                        <form className="inquiry-form inner dzForm" action="script/contact.php">
                                            <div className="dzFormMsg"></div>
                                            <h3 className="box-title m-t0 m-b10">Let's Convert Your Idea into Reality <span className="bg-primary"></span></h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-user text-primary"></i></span>
                                                            <input name="dzName" type="text" required className="form-control" placeholder="First Name" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-mobile text-primary"></i></span>
                                                            <input name="dzOther[Phone]" type="text" required className="form-control" placeholder="Phone" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-email text-primary"></i></span>
                                                            <input name="dzEmail" type="email" className="form-control" required placeholder="Your Email Id" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-check-box text-primary"></i></span>
                                                            <input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Upload File" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-file text-primary"></i></span>
                                                            <input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Upload File" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-agenda text-primary"></i></span>
                                                            <textarea name="dzMessage" rows="4" className="form-control" required placeholder="Tell us about your project or idea"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                                            <input className="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <button name="submit" type="submit" value="Submit" className="site-button button-lg"> <span>Get A Free Quote!</span> </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}
                        <div className="section-full content-inner-1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-head text-center">
                                            <h2 className="box-title m-tb0">Our Pricing<span className="bg-primary"></span></h2>
                                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                                        </div>
                                        {/* <!-- Pricing table-1 Columns 3 with gap --> */}
                                        <div className="section-content box-sort-in button-example">
                                            <div className="pricingtable-row">
                                                <div className="row max-w1000 m-auto">
                                                    <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                        <div className="pricingtable-wrapper style1">
                                                            <div className="pricingtable-inner">
                                                                <div className="pricingtable-price">
                                                                    <div className="pricingtable-icon"><i className="flaticon-rocket-ship"></i></div>
                                                                    <h4 className="font-weight-300 m-t10 m-b0">Starter</h4>
                                                                    <span className="pricingtable-bx text-primary">$25</span> <span className="pricingtable-type">Par Month</span>
                                                                </div>
                                                                <ul className="pricingtable-features">
                                                                    <li><i className="fa fa-check text-primary"></i> Full Responsive </li>
                                                                    <li><i className="fa fa-check text-primary"></i> Multi color theme</li>
                                                                    <li><i className="fa fa-check text-primary"></i> With Bootstrap</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Easy to customize</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Many Sortcodes</li>
                                                                </ul>
                                                                <div className="m-t20">
                                                                    <Link to={"#"} className="site-button outline outline-2 button-md">Sign Up</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                        <div className="pricingtable-wrapper style1 active">
                                                            <div className="pricingtable-inner">
                                                                <div className="pricingtable-price">
                                                                    <div className="pricingtable-icon"><i className="flaticon-users"></i></div>
                                                                    <h4 className="font-weight-300 m-t10 m-b0">Professional</h4>
                                                                    <span className="pricingtable-bx text-primary">$50</span> <span className="pricingtable-type">Par Month</span>
                                                                </div>
                                                                <ul className="pricingtable-features">
                                                                    <li><i className="fa fa-check text-primary"></i> Full Responsive </li>
                                                                    <li><i className="fa fa-check text-primary"></i> Multi color theme</li>
                                                                    <li><i className="fa fa-check text-primary"></i> With Bootstrap</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Easy to customize</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Many Sortcodes</li>
                                                                </ul>
                                                                <div className="m-t20 m-b5">
                                                                    <Link to={"#"} className="site-button button-md">Sign Up</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                        <div className="pricingtable-wrapper style1">
                                                            <div className="pricingtable-inner">
                                                                <div className="pricingtable-price">
                                                                    <div className="pricingtable-icon"><i className="flaticon-bar-chart"></i></div>
                                                                    <h4 className="font-weight-300 m-t10 m-b0">Enterprise</h4>
                                                                    <span className="pricingtable-bx text-primary">$75</span> <span className="pricingtable-type">Par Month</span>
                                                                </div>
                                                                <ul className="pricingtable-features">
                                                                    <li><i className="fa fa-check text-primary"></i> Full Responsive </li>
                                                                    <li><i className="fa fa-check text-primary"></i> Multi color theme</li>
                                                                    <li><i className="fa fa-check text-primary"></i> With Bootstrap</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Easy to customize</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Many Sortcodes</li>
                                                                </ul>
                                                                <div className="m-t20">
                                                                    <Link to={"#"} className="site-button outline outline-2 button-md">Sign Up</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Why Chose Us --> */}
							<SectionCounter />
                        {/* <!-- Why Chose Us End --> */}
                        {/* <!-- Testimonials --> */}
                       
                            <div className="container">
                                <div className="section-content m-b30 	">
                                   <Team />
                                </div>
                            </div>
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="box-title m-tb0">Our Testimonials<span className="bg-primary"></span></h2>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                                </div>
                                <div className="section-content m-b30 	">
								 <TestimonialCarousel /> 
                                </div>
                            </div>
                 
                        {/* <!-- Testimonials END --> */}
                        {/* <!-- Get in touch --> */}
                        <div className="section-full overlay-primary-dark bg-img-fix" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                            <FormStyle />
                        </div>
                        {/* <!-- Get in touch --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default Expertise;