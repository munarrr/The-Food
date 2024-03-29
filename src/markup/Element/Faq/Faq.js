import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AccordionBlog from '../AccordionBlog';
import VideoPopup from '../VideoPopup';

import bnr1 from '../../../images/banner/bnr4.jpg';
import pattern from '../../../images/pattern/pic1.jpg';
import about from '../../../images/about/pic10.jpg';

const iconBlog = [
      { icon: <i className="flaticon-bar-chart" />, title: 'Make it Simple', },
      { icon: <i className="flaticon-trophy" />, title: 'Unique design', },
      { icon: <i className="flaticon-devices" />, title: 'True Responsiveness', },
];


class Faqs extends Component {
      render() {
            return (
                  <>


                        <div className="page-content bg-white">
                              <div className="content-block">
                                    {/* <!-- Your Faq --> */}
                                    <div className="section-full overlay-white-middle content-inner" style={{ backgroundImage: "url(" + pattern + ")" }}>
                                          <div className="container">
                                                <div className="section-head text-black text-center">
                                                      <h3>У вас остались вопросы?</h3>
                                                      <div className="dlab-separator bg-primary"></div>
                                                      <p>Еслли все еще не получили ответ то отправте нам свой телефон номер и участвуйте в розыгрыш</p>
                                                </div>
                                                <div className="row">
                                                      <div className="col-lg-6 col-md-12 m-b30" >
                                                            <div className="faq-video">
                                                                  <VideoPopup />
                                                                  <img src={about} alt="" className="img-cover radius-sm" />
                                                            </div>
                                                      </div>
                                                      <div className="col-lg-6 col-md-12 m-b30">
                                                            <AccordionBlog />
                                                      </div>
                                                </div>
                                                {/* <!-- Faq Info --> */}
                                                <div className="row">
                                                      {iconBlog.map((item, index) => (
                                                            <div className="col-lg-4 col-md-4 col-sm-6 m-b30">
                                                                  <div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                                                                        <div className="icon-md text-primary m-b20">
                                                                              <Link to={"#"} className="icon-cell">{item.icon}</Link>
                                                                        </div>
                                                                        <div className="icon-content">
                                                                              <h5 className="dlab-tilte text-uppercase">{item.title}</h5>
                                                                              <p>Web design aorem apsum dolor  dolore magna aliquam erat volutpat.Claritas est etiam processus.</p>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      ))}
                                                </div>
                                                {/* <!-- Faq Info END --> */}
                                          </div>
                                    </div>
                                    {/* <!-- Your Faq End --> */}
                              </div>
                              {/* <!-- contact area END --> */}
                        </div>


                  </>
            )
      }
}
export default Faqs;