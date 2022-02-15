import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer1 extends Component {
    render() {
        return (
            <>
                <footer className="site-footer text-uppercase">
                    <div className="footer-top bg-primary">
                        <div className="container" >
                            <div className="row">
                                <div className="col-5 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_services border-0">
                                        <h5 className="m-b30 text-white">главное меню</h5>
                                        <ul>
											<li><Link to={"#"}>О нас</Link></li>
                                            <li><Link to={"#"}>Главная </Link></li>
                                            <li><Link to={"#"}>Контакты</Link></li>
                                            <li><Link to={"#"}>Цены</Link></li>
                                            <li><Link to={"#"}>Наши курсы</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-7 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_services border-0">
                                        <h5 className="m-b30 text-white">Useful Link</h5>
                                        <ul>
                                            <li><Link to={"#"}>Create Account</Link></li>
                                            <li><Link to={"#"}>Company Philosophy </Link></li>
                                            <li><Link to={"#"}>Corporate Culture</Link></li>
                                            <li><Link to={"#"}>Portfolio</Link></li>
                                            <li><Link to={"#"}>Project Details</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_getintuch">
                                        <h5 className="m-b30 text-white ">Контакты для свсязи</h5>
                                        <ul>
                                            <li><i className="ti-location-pin"></i><strong>адресс</strong>  #8901 Бишкек ул Манас 34г </li>
                                            <li><i className="ti-mobile"></i><strong>Телефон</strong>+996 555 555 555 (27/7 онлайн)</li>
                                            <li><i className="ti-email"></i><strong>email</strong>info@example.com</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
                                    <div className="widget">
                                        <h5 className="m-b30 text-white">подпишись на наш сеть</h5>
                                        <p className="text-capitalize m-b20">If you have any questions, you can contact with us so that we can give you a satisfying answer. Subscribe to our newsletter to get our latest products.</p>
                                        <div className="subscribe-form m-b20">
                                            <form className="dzSubscribe" action="script/mailchamp.php" method="post">
                                                <div className="dzSubscribeMsg"></div>
                                                <div className="input-group">
                                                    <input name="dzEmail" required="required" className="form-control" placeholder="Your Email Id" type="email" />
                                                    <span className="input-group-btn">
                                                        <button name="submit" value="Submit" type="submit" className="site-button">Подписка</button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                        <ul className="list-inline m-a0">
                                            <li><Link to={"#"} className="site-button facebook circle mr-1"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link to={"#"} className="site-button google-plus circle mr-1"><i className="fa fa-google-plus"></i></Link></li>
                                            <li><Link to={"#"} className="site-button linkedin circle mr-1"><i className="fa fa-linkedin"></i></Link></li>
                                            <li><Link to={"#"} className="site-button instagram circle mr-1"><i className="fa fa-instagram"></i></Link></li>
                                            <li><Link to={"#"} className="site-button twitter circle mr-1"><i className="fa fa-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom bg-primary">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 text-left "> <span>Copyright © 2022 by munarrr</span> </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 text-right ">
                                    <div className="widget-link ">
                                        <ul>
                                            <li><Link to={"#"}>Онлайн помощь</Link></li>
                                            <li className="ml-1"><Link to={"#"}>политика о конфеденциалности</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer1;