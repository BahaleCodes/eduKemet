import React from "react"

const Gallery = () => {
	const cources = [
		{
			src: 'img/new/seo.png',
			alt: 'SEO Fundamentals',
			title: 'SEO Fundamentals',
			description: '18/25 Modules completed (72%)',
		},
		{
			src: 'img/new/SocialMediaMarketing.png',
			alt: 'Social Media Marketing',
			title: 'Social Media Marketing',
			description: '1/15 Modules completed (6.67%)',
		}
	];
	return (
		<div id='specialities' className='text-center'>
			<div className='container'>
				<div className='section-title'>
					<h2>Progress</h2>
				</div>
				<div className='row'>
					<div className='portfolio-items'>
						{cources.map((cource, index) => (
							<div key={index} className='col-sm-6 col-md-4 col-lg-4'>
								<div className='portfolio-item'>
									<div className='hover-bg'>
										{' '}
										<a
											href={`#${cource.alt}`}
											title={cource.alt}
											data-lightbox-gallery='gallery1'
										>
											<div className='hover-text'>
												<h4>{cource.title}</h4>
												<div className='clearfix'></div>
												<p>{cource.description}</p>
											</div>
											<img
												src={cource.src}
												className='img-responsive'
												alt={cource.alt}
											/>{' '}
										</a>{' '}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
export default Gallery;