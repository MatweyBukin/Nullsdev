function PortfolioItem ({src, description}) {
    console.log(src)
  return (
      <div className='portfolio-card'>
          <img className='portfolio-card-image' src="/portfolio_images/this_website.jpg"/>
          <span>{description}</span>
      </div>
  );
}

export default PortfolioItem