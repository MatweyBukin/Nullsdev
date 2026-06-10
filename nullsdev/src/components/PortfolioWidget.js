import PortfolioItem from './PortfolioItem';
import {portfolio} from "../config"
import {useNavigate} from "react-router-dom"

function PortfolioWidget() {
  const navigate = useNavigate()

  return (
    <>
        <span onClick={() => navigate("/portfolio")} className='portfolio-title'>Портфолио</span>
        <div onClick={() => navigate("/portfolio")} className='portfolio-widget'>
          {portfolio.map(item => 
            <PortfolioItem src={item.img} description={item.description}/>
          )}
        </div>
    </>
  );
}

export default PortfolioWidget;
