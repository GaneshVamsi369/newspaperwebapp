import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Footer=()=>{
    return(
        <ThemeContext.Consumer>
            {value=>{
                const {isDarkTheme}=value
                const navbg = isDarkTheme ? 'navdark' : 'navlight'
                const navtext = isDarkTheme ? 'navtextdark' : 'navtextlight'
                return(
                    <div className={`foot ${navbg} ${navtext}`}>
                        <div className='footdiv'>
                            <div className='cont'>
                                <img
                                    src="https://res.cloudinary.com/ddcnijufj/image/upload/v1707904155/4c07d314-022a-47db-af0e-debbbcd5d99b.jpg-output_wbrlnn.png"
                                    alt="website logo" className='logoimg'
                                />
                                <p>This material may not be published, broadcast, rewritten, or redistributed.
                                    ©2024 The Bharat News Network, LLC. All rights reserved. Quotes displayed in 
                                    real-time or delayed by at least 15 minutes. Market data provided by Factset.
                                    Powered and implemented by FactSet Digital Solutions. Legal Statement. Mutual
                                    Fund and ETF data provided by Refinitiv Lipper.
                                </p>
                            </div>
                            <div className='cont'>
                                <h3 className='foothead'>IMPORTANT LINKS</h3>
                                <Link to='/'><p className={`${navtext}`}>HOME</p></Link>
                                <Link to='/business'><p className={`${navtext}`}>BUSINESS</p></Link>
                                <Link to='/entertainment'><p className={`${navtext}`}>ENTERTAINMENT</p></Link>
                                <Link to='/general'><p className={`${navtext}`}>GENERAL</p></Link>
                                <Link to='/health'><p className={`${navtext}`}>HEALTH</p></Link>
                                <Link to='/science'><p className={`${navtext}`}>SCIENCE</p></Link>
                                <Link to='/sports'><p className={`${navtext}`}>SPORTS</p></Link>
                                <Link to='/technology'><p className={`${navtext}`}>TECHNOLOGY</p></Link>
                            </div>
                            <div className='cont'>
                                <h3 className='foothead'>EXPLORE THE BHARAT NEWS</h3>
                                <p>Privacy Policy</p>
                                <p>FAQs</p>
                                <p>Terms of Services</p>
                            </div>
                        </div>
                        <div className='footerfoot'>
                            <p>Copyright &#169; The Bharat News. 2024 ALL Rights Reserved.</p>
                            <p>Privacy | Terms of Services</p>
                        </div>
                    </div>
                )
                
            }}
        </ThemeContext.Consumer>
        
    )
}
export default Footer