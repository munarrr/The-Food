import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class HeaderMenu extends Component{
	render(){
		return(
			<>
				<ul className="nav navbar-nav">
					<li className="active"><Link to='/'>Главная</Link>
					</li>
					<li><Link to={'./about-1'} >О нас</Link>
						<ul className="sub-menu">
							<li><Link to={'#'}>Error Page <i className="fa fa-angle-right"></i></Link>
								<ul className="sub-menu">
									<li><Link to={'./error-403'} className="dez-page">Error page</Link></li>
									<li><Link to={'./error-404'} className="dez-page">Error 404</Link></li>
									<li><Link to={'./error-405'} className="dez-page">Error 405</Link></li>
								</ul>
							</li>
							<li><Link to={'#'}>Coming Soon <i className="fa fa-angle-right"></i></Link>
								<ul className="sub-menu">
									<li><Link to={'./coming-soon-1'} className="dez-page">Coming Soon 1 </Link></li>
								</ul>
							</li> 
							<li><Link to={'./under-maintenance'} className="dez-page">Under Maintenance</Link></li>
							<li><Link to={'./expertise'} className="dez-page">Expertise</Link></li>
							<li><Link to={'./project-management'} className="dez-page">Project management</Link></li>
							<li><Link to={'./our-projects'} className="dez-page">Our Projects</Link></li>
							<li><Link to={'./project-details'} className="dez-page">Project Details </Link></li>
							<li><Link to={'./team'} className="dez-page">Our Team</Link></li>
							<li><Link to={'./faqs'} className="dez-page">FAQ's</Link></li>
							<li><Link to={'./login'} className="dez-page">Login </Link></li>
							<li><Link to={'./register'} className="dez-page">Register </Link></li>
							<li><Link to={'./contact'} className="dez-page">Contact Us</Link></li>
						</ul>
					</li>
					<li><Link to={'#'}>Наши курсы <i className="fa fa-chevron-down"></i></Link>
						<ul className="sub-menu">
							<li><Link to={'./service'} className="dez-page">Services</Link></li>
							<li><Link to={'./services-details'} className="dez-page">Services Details</Link></li>
						</ul>
					</li>
					<li><Link to={'#'}>Новости <i className="fa fa-chevron-down"></i></Link>
						<ul className="sub-menu">
							<li><Link to={'#'}>Blog Standard <i className="fa fa-angle-right"></i></Link>
								<ul className="sub-menu left">
									<li><Link to={'./blog-standard'} className="dez-page">Standard</Link></li>
									<li><Link to={'./blog-standard-left-sidebar'} className="dez-page">Standard Left Sidebar</Link></li>
									<li><Link to={'./blog-standard-right-sidebar'} className="dez-page">Standard Right Sidebar</Link></li>
								</ul>
							</li>
							<li><Link to={'#'}>Blog Classic <i className="fa fa-angle-right"></i></Link>
								<ul className="sub-menu left">
									<li><Link to={'./blog-classic-grid'} className="dez-page">Classic</Link></li>
									<li><Link to={'./blog-classic-left-sidebar'} className="dez-page">Classic Left Sidebar</Link></li>
									<li><Link to={'./blog-classic-right-sidebar'} className="dez-page">Classic Right Sidebar</Link></li>
								</ul>
							</li>
							<li><Link to={'#'}>Blog List <i className="fa fa-angle-right"></i></Link>
								<ul className="sub-menu left">
									<li><Link to={'./blog-list-left-sidebar'} className="dez-page">List Left Sidebar</Link></li>
									<li><Link to={'./blog-list-right-sidebar'} className="dez-page">List Right Sidebar</Link></li>
								</ul>
							</li>
							<li><Link to={'./blog-details'} className="dez-page">Blog Details</Link></li>
						</ul>
					</li>
					<li><Link to={'#'}>Галерея <i className="fa fa-chevron-down"></i></Link>
						<ul className="sub-menu left">
							<li><Link to={'./portfolio-full-width'} className="dez-page">Portfolio Full Width  </Link></li>
							<li><Link to={'./portfolio-grid-2'} className="dez-page">Portfolio Grid 2 </Link></li>
							<li><Link to={'./portfolio-grid-3'} className="dez-page">Portfolio Grid 3 </Link></li>
							<li><Link to={'./portfolio-grid-4'} className="dez-page">Portfolio Grid 4 </Link></li>
						</ul>
					</li>
					
				</ul>
			</>
		)
	}
}
export default HeaderMenu;