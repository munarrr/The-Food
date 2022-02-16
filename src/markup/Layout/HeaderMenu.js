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
					</li>
					<li><Link to={'./expertise'}>Наши курсы </Link>						
					</li>
					<li><Link to={'./blog-classic-grid'}>Новости</Link>					
					</li>
					<li><Link to={'./portfolio-full-width'}>Галерея</Link>					
					</li>
					
				</ul>
			</>
		)
	}
}
export default HeaderMenu;