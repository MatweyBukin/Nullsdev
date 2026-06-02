function PortfolioItem ({src, description}) {
  return (
      <div className='portfolio-card'>
          <img className='portfolio-card-image' src={src} alt=''/>
          <span>{description}</span>
      </div>
  );
}

export default PortfolioItem