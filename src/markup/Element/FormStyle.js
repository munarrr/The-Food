import React,{Fragment, Component} from 'react';

class FormStyle extends Component{
	render(){
		return(
			<Fragment>
				<div className="container">
					<div className="row">
						<div className="col-lg-5 col-md-5 content-inner chosesus-content text-white">
							<h2 className="box-title m-b15 " >Приходите к нам в бесплатный урок<span className="bg-primary"></span></h2>
							<p className="font-16 op8" >Оставтьте свои контактные данные и мы свами свяжемся через 15 минут</p>
							<h3 className="font-weight-500 m-b50 op6 " >700+ люди мы обучили и ты тоже стань один из них</h3>
							<h4 className="" >Что вы получите:</h4>
							<ul className="list-checked primary " >
								<li><span>Мы согласовываем с вами дату посещения бесплатного урока и тестирования.</span></li>
								<li><span>Посещаете бесплатный урок и узнаете свой уровень.</span></li>
								<li><span>Подбираем программу согласно Вашему уровню и целям. Вы начинаете учиться.</span></li>
							</ul>
						</div>
						<div className="col-lg-7 col-md-7 m-b30">
							<form className="inquiry-form  dzForm"  action="script/contact.php">
								<div className="dzFormMsg"></div>
								<h3 className="box-title m-t0 m-b10">Первый шаг к цели -
									бесплатный  урок<span className="bg-primary"></span></h3>
								<p>Обращаясь в нашу компанию, вы гарантированно получаете высокое качество обучения и усвоения иностранных языков. INTERNATIONAL LANGUAGE HOUSE - это команда профессионалов с многолетним опытом работы на рынке образования.</p>
								<div className="row">
									<div className="col-lg-6">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-user text-primary"></i></span>
												<input name="dzName" type="text" required className="form-control" placeholder="Ваше имя" />
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-mobile text-primary"></i></span>
												<input name="dzOther[Phone]" type="text" required className="form-control" placeholder="Ваш телефон" />
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-user text-primary"></i></span>
												<input name="dzName" type="text" required className="form-control" placeholder="Ваш телеграм(необьязтельно)" />
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-user text-primary"></i></span>
												<input name="dzName" type="text" required className="form-control" placeholder="Ваш whatsapp(необьязтельно)" />
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
			</Fragment>
		)
	}
}
export default FormStyle;