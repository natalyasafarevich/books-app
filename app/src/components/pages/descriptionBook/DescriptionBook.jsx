import "./DescriptionBook.scss";

export function DescriptionBook() {
	return (
		<div className="desc-book">
			<p className="desc-book__title">Mastering Azure API Management</p>
			<div className="desc-book__container">
				<div className="desc-book__preview">
                    <div className="desc-book__box">		<img className="desc-book__img" src="" alt="book img" /></div>
                    
			
					<div className="desc-book__btns">
						<a href="/" className="desc-book__buy">
							buy
						</a>
						<a href="/" className="desc-book__preview">
							preview
						</a>
					</div>
				</div>

				<div className="desc-book__info">
					<p className="desc-book__text">
						<span>price</span> $49.99
					</p>
					<p className="desc-book__rating"> </p>
					<p className="desc-book__text">
					
						<span>author</span> Sven Malvik
					</p>
					<p className="desc-book__text">
						<span>Published</span> 2022
					</p>
					<p className="desc-book__text">
						<span>Pages</span> 266
					</p>
					<p className="desc-book__text">
						<span>Language</span> English
					</p>
					<p className="desc-book__text">
						<span>Format</span> Paper book / ebook (PDF)
					</p>
					<p className="desc-book__desc">
						Unsure of how or where to get started with Azure API Management,
						Microsoft's managed service for securing, maintaining, and monitoring
						APIs? Then this guide is for you. Azure API Management integrates services
						like Azure Kubernetes Services (AKS), Function Apps, Logic Apps, and many
						others with the cloud and provides users with a single, unified, and
						well-structured faÃ§ade in the cloud.
					</p>
				</div>
			</div>
		</div>
	);
}
