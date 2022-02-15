import React,{Fragment,  useState} from 'react';
import {Link} from 'react-router-dom';
import { TabContent, TabPane, } from 'reactstrap';
import classnames from 'classnames';

//Images
import pic5 from './../../images/about/pic5.jpg';
import pic6 from './../../images/about/pic6.jpg';
import pic7 from './../../images/about/pic7.jpg';
import pic8 from './../../images/about/pic8.jpg';

function Para(){
	return(
		<>
			<div className="abuot-box p-lr30">
				<p>Особой гордостью языковой школы LOGOS SCHOOL является преподавательский состав. Команда носителей языка и лучших педагогов работают с нами. Все наши преподаватели проходят тщательный отбор и все время повышают свою квалификацию.
					Мы уже зарекомендовали себя как лучшие курсы английского языка в Бишкеке!</p>
			</div>	
		</>
	)
}

const HomeTab = (props) => {
	const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
	  
	return(
		<Fragment>			
			<div className="container-fluid">
				<div className="dlab-tabs choseus-tabs">
					<ul className="nav row justify-content-center"  id="myTab" role="tablist">
						{/* <li>
							<a className= {classnames({ active : activeTab === '1' }) + ' className if avialble'}  onClick={() => { toggle('1'); }}	
							><span className="title-head">Cost Effectiveness</span></a>
						</li> */}
						<li>
							<Link to={"#"} className={classnames({ active: activeTab === '1' }) + ''} onClick={() => { toggle('1'); }}><span className="title-head">АВТОРСКАЯ РАЗРАБОТКА</span></Link>
						</li>
						<li>
							<Link to={"#"} className={classnames({ active: activeTab === '2' }) + ''} onClick={() => { toggle('2'); }}><span className="title-head">Логика вместо сотен правил</span></Link>
						</li>
						<li>
							<Link to={"#"} className={classnames({ active: activeTab === '3' }) + ''} onClick={() => { toggle('3'); }}><span className="title-head">Уникльная метод обучение</span></Link>
						</li>
						<li>
							<Link to ={"#"}	className={classnames({active:activeTab === '4'}) + ''} onClick={()=>{ toggle('4');}}><span className="title-head">Выгодные цены</span></Link>
						</li>
					</ul>
				</div>	
			</div>
			<div className="container">
				<div className="tab-content chosesus-content">
					<div id="cost" className="tab-pane active">
						<TabContent activeTab={activeTab}>
							<TabPane tabId="1">
								<div className="row p-tb50">
									<div className="col-lg-6 m-b10 col-md-4 about-img " >
										<img src={pic5} alt="" />
									</div>
									<div className="col-lg-6 col-md-8 text-white">
										<div className="p-l30 " >
											<h4 className="font-weight-300">АВТОРСКАЯ РАЗРАБОТКА</h4>
											<ul className="list-checked primary">
												<li><span>Справиться с языковым барьером помогут более 1 000 разнообразных игр и тренингов</span></li>
												<li><span>Постоянная практика научит вас хорошо понимать устную речь и уверенно говорить самим</span></li>
												<li><span>Постоянная практика научит вас хорошо понимать устную речь и уверенно говорить самим</span></li>
											</ul>
										</div>
										<Para />
									</div>
								</div>
							</TabPane>
							<TabPane tabId="2">
								<div className="row p-tb50">
									<div className="col-lg-6 col-md-4 about-img">
										<img src={pic6} alt="" />
									</div>
									<div className="col-lg-6 col-md-8 text-white">
										<div className="p-l30">
											<h4 className="font-weight-300">Логика вместо сотен правил</h4>
											<ul className="list-checked primary">
												<li><span>С первого занятия общение только на английском</span></li>
												<li><span>Группы 6-8 человек</span></li>
												<li><span>Занятия в современных и оборудованных классах</span></li>
											</ul>
										</div>
										<Para />
									</div>
								</div>
							</TabPane>
							<TabPane tabId="3">
								<div className="row p-tb50">
									<div className="col-lg-6 col-md-4 about-img">
										<img src={pic7} alt="" />
									</div>
									<div className="col-lg-6 col-md-8 text-white">
										<div className="p-l30">
											<h4 className="font-weight-300">Уникльная метод обучение</h4>
											<ul className="list-checked primary">
												<li><span>Вся грамматика дается в виде компактной и логичной системы.</span></li>
												<li><span>Вместо сотен правил – 4 логические модели, позволяющие строить ЛЮБОЕ предложение</span></li>
												<li><span>Понятные схемы и модели для легкого усвоения материала.</span></li>
											</ul>
										</div>
										<Para />
									</div>
								</div>
							</TabPane>
							<TabPane tabId="4">
								<div className="row p-tb50">
									<div className="col-lg-6 col-md-4 about-img">
										<img src={pic8} alt="" />
									</div>
									<div className="col-lg-6 col-md-8 text-white">
										<div className="p-l30">
											<h4 className="font-weight-300">Запоминание через ассоциации и контекст</h4>
											<ul className="list-checked primary">
												<li><span>Мы предлагаем современную технологию запоминания лексики через контекст или прямые ассоциации</span></li>
												<li><span> График повторений строится с учетом психологических особенностей механизмов </span></li>
												<li><span>Быстрый результат за 1 месяц</span></li>
											</ul>
										</div>
										<Para />
									</div>
								</div>
							</TabPane>
							
						</TabContent>
					</div>	
				</div>
			</div>	
		</Fragment>
	)
	
}	
export default HomeTab;