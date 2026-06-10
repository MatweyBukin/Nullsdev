function PortfolioItem ({src, description}) {
    console.log(src)
  return (
      <div className='portfolio-card'>
          <img className='portfolio-card-image' src={`/Nullsdev/portfolio_images/${src}`} alt=""/>
          <span>{description}</span>
      </div>
  );
}

export default PortfolioItem