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
    { image: kyr, title: 'Кыргыз тили', text:"1200с/месяц - посещение занятий 3 раза в неделю. Итого вы пройдете за месяц 12 уроков." },
    { image: kaz, title: 'Казакский язык', text:"1200с/месяц - посещение занятий 3 раза в неделю. Итого вы пройдете за месяц 12 уроков." },
    { image: eng, title: 'English', text:"1200с/месяц - посещение занятий 3 раза в неделю. Итого вы пройдете за месяц 12 уроков." },
    { image: rus, title: 'Русский', text:"1200с/месяц - посещение занятий 3 раза в неделю. Итого вы пройдете за месяц 12 уроков."},
    { image: kor, title: 'Корейский язык', text:"1200с/месяц - посещение занятий 3 раза в неделю. Итого вы пройдете за месяц 12 уроков." },
    { image: turk, title: 'Turkish', text:"Турецкий и русский языки включают в себя по 2 уровня, делятся на первый и второй месяцы." }
]
	

class Expertise extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
                        <PageTitle motherMenu='Курсы и цены' activeMenu='Курсы' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 col-md-7">
                                        <div className="section-head text-black">
                                            <h4 className="text-gray-dark font-weight-300 m-b10">КУРСЫ АНГЛИЙСКОГО ЯЗЫКА</h4>
                                            <h2 className="box-title m-tb0">Цены и курсы<span className="bg-primary"></span></h2>
                                            <p>АВТОРСКАЯ РАЗРАБОТКА НА ОСНОВЕ СОВРЕМЕННЫХ МЕТОДОВ ТОЛЬКО ЭФФЕКТИВНОЕ ОБУЧЕНИЕ!</p>
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
                                            <h3 className="box-title m-t0 m-b10">Первый шаг к цели - бесплатный урок<span className="bg-primary"></span></h3>
                                            <p>Отправляйте нам свои данные и и вы получите бесплатный урок от нас</p>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-user text-primary"></i></span>
                                                            <input name="dzName" type="text" required className="form-control" placeholder="Имя" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-mobile text-primary"></i></span>
                                                            <input name="dzOther[Phone]" type="text" required className="form-control" placeholder="Телефон" />
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                <div className="col-lg-12">
                                                    <button name="submit" type="submit" value="Submit" className="site-button button-lg"> <span>Отправить</span> </button>
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
                                            <h2 className="box-title m-tb0">Цены за курс<span className="bg-primary"></span></h2>
                                            <p>ДЛЯ ТЕХ, КТО ХОЧЕТ ИЗБАВИТЬСЯ ОТ ЯЗЫКОВОГО БАРЬЕРА</p>
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
                                                                    <h4 className="font-weight-300 m-t10 m-b0">Обучение в группах</h4>
                                                                    <span className="pricingtable-bx text-primary">1200с</span> <span className="pricingtable-type">В месяц</span>
                                                                </div>
                                                                <ul className="pricingtable-features">
                                                                    <li><i className="fa fa-check text-primary"></i>Вы получите безценный опыт</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Вы получите безценный опыт</li>
                                                                    <li><i className="fa fa-check text-primary"></i>30 уроков в месяц</li>
                                                                </ul>
                                                                <div className="m-t20">
                                                                    <Link to={'/contacts'} className="site-button outline outline-2 button-md"> Контакты</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                        <div className="pricingtable-wrapper style1 active">
                                                            <div className="pricingtable-inner">
                                                                <div className="pricingtable-price">
                                                                    <div className="pricingtable-icon"><i className="flaticon-users"></i></div>
                                                                    <h4 className="font-weight-300 m-t10 m-b0">Индувидуальное обучение</h4>
                                                                    <span className="pricingtable-bx text-primary">1500с</span> <span className="pricingtable-type">В месяц</span>
                                                                </div>
                                                                <ul className="pricingtable-features">
                                                                    <li><i className="fa fa-check text-primary"></i>Вы получите безценный опыт</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Вы получите безценный опыт</li>
                                                                    <li><i className="fa fa-check text-primary"></i>30 уроков в месяц</li>
                                                                   
                                                                </ul>
                                                                <div className="m-t20 m-b5">
                                                                    <Link to={'/contacts'} className="site-button button-md">Контакты</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                        <div className="pricingtable-wrapper style1">
                                                            <div className="pricingtable-inner">
                                                                <div className="pricingtable-price">
                                                                    <div className="pricingtable-icon"><i className="flaticon-bar-chart"></i></div>
                                                                    <h4 className="font-weight-300 m-t10 m-b0">Онлайн Обучение</h4>
                                                                    <span className="pricingtable-bx text-primary">800с</span> <span className="pricingtable-type">В месяц</span>
                                                                </div>
                                                                <ul className="pricingtable-features">
                                                                    <li><i className="fa fa-check text-primary"></i>Вы получите безценный опыт</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Вы получите безценный опыт</li>
                                                                    <li><i className="fa fa-check text-primary"></i>30 уроков в месяц</li>
                                                                </ul>
                                                                <div className="m-t20">
                                                                    <Link to={'/contacts'} className="site-button outline outline-2 button-md"> Контакты</Link>
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
                                    <h2 className="box-title m-tb0">Отзывы от наших учеников<span className="bg-primary"></span></h2>
                                    <p>Мы открыли путь для каждого ученика и они тоже не жалеет что выбирали нас</p>
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