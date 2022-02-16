import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import bnr from '../../../images/banner/bnr3.jpg';
import pic1 from '../../../images/our-team/pic1.jpg';
import pic2 from '../../../images/our-team/pic2.jpg';
import pic3 from '../../../images/our-team/pic3.jpg';
import pic4 from '../../../images/our-team/pic4.jpg';

const teamBlog = [
      { images: pic1, text: "Aigul Kokonovo", prof: "Teacher" },
      { images: pic3, text: "Aigul Kokonovo", prof: "Teacher" },
      { images: pic2, text: "Aigul Kokonovo", prof: "Teacher" },
      { images: pic4, text: "Aigul Kokonovo", prof: "Teacher" },
      
]

class Team extends Component {
      componentDidMount() {
      }
      render() {
            return (
                  <>


                        <div className="page-content bg-white">

                              <div className="content-block">
                                    {/* <!-- Team Section --> */}
                                    <div className="section-full text-center bg-white content-inner-1">
                                          <div className="container">
                                                <div className="section-head text-black text-center">
                                                      <h2>ПРЕПОДАВАТЕЛИ ИЗ США</h2>
                                                      <p>Вы сразу погружаетесь в языковую среду и с каждым занятием общаетесь все свободнее. Студенты с начальными уровнями занимаются с русскоязычными преподавателями.</p>
                                                </div>
                                                <div className="row">
                                                      {teamBlog.map((data, index) => (
                                                            <div className="col-lg-3 col-md-6 col-sm-6 m-b5" key={index}>
                                                                  <div className="dlab-box">
                                                                        <div className="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm">
                                                                              <img src={data.images} alt="" />
                                                                              <div className="overlay-bx">
                                                                                    <div className="overlay-icon">
                                                                                          <ul className="dlab-social-icon">
                                                                                                <li><Link to={"#"} className="fa text-white fa-facebook"></Link></li>
                                                                                                <li><Link to={"#"} className="fa text-white fa-twitter"></Link></li>
                                                                                                <li><Link to={"#"} className="fa text-white fa-linkedin"></Link></li>
                                                                                                <li><Link to={"#"} className="fa text-white fa-facebook"></Link></li>
                                                                                          </ul>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                        <div className="dlab-title-bx p-a10">
                                                                              <h5 className="text-black m-a0">{data.text}</h5>
                                                                              <span className="clearfix">{ data.prof}</span>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      ))}
                                                </div>
                                          </div>
                                    </div>

                              </div>
                              {/* <!-- contact area END --> */}
                        </div>
                  </>
            )
      }
}
export default Team;