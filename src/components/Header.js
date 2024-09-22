import React from "react";

const Header = (props) => {
	return (
		<header id='header'>
			<div className='intro'>
				<div className='overlay'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-8 col-md-offset-2 intro-text'>
								<h2>
									{/* {props.data ? props.data.title : 'Loading'} */}
									Congratulations! 275+ points
									<span></span>
								</h2>
								<a
									href='/profile'
									className='btn btn-custom btn-lg page-scroll'
								>
									See Leaderboad
								</a>{' '}
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;