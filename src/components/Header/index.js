import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {IoMenu, IoCloseOutline} from 'react-icons/io5'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Header extends Component {
  state = {menudisplay: false}

  menuclicked = () => {
    this.setState(prev => ({menudisplay: !prev.menudisplay}))
  }

  closebtn = () => {
    this.setState({menudisplay: false})
  }

  render() {
    const {menudisplay} = this.state
    const {history} = this.props
    const loca = history.location.pathname
    const homeli = loca === '/' ? `${'active'} headerlistli` : 'headerlistli'
    const businessli = loca === '/business' ? `${'active'} headerlistli` : 'headerlistli '
    const entertainmentli = loca === '/entertainment' ? `${'active'} headerlistli` : 'headerlistli'
    const generalli = loca === '/general' ? `${'active'} headerlistli` : 'headerlistli'
    const healthli = loca === '/health' ? `${'active'} headerlistli` : 'headerlistli'
    const scienceli = loca === '/science' ? `${'active'} headerlistli` : 'headerlistli'
    const sportsli = loca === '/sports' ? `${'active'} headerlistli` : 'headerlistli'
    const technologyli = loca === '/technology' ? `${'active'} headerlistli` : 'headerlistli'
    console.log(homeli)

    return (
      <ThemeContext.Consumer>
        {value=>{
          const {isDarkTheme,toggleTheme}=value
          const ontogglebtn=()=>{
            toggleTheme()
          }
          const themelogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
        const navbg = isDarkTheme ? 'navdark' : 'navlight'
        const navtext = isDarkTheme ? 'navtextdark' : 'navtextlight'
        return(
      <nav className={`nav ${navbg}`}>
        <div className="largenav">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/ddcnijufj/image/upload/v1707904155/4c07d314-022a-47db-af0e-debbbcd5d99b.jpg-output_wbrlnn.png"
              alt="website logo" className='logoimg'
            />
          </Link>
          <div className='options'>
          <ul className="headerlist">
            <Link to="/" className="linkstyle">
              <li className={`${navtext} ${homeli} `}> Home</li>
            </Link>

            <Link to="/business" className="linkstyle">
              <li className={`${navtext} ${businessli}`}> Business</li>
            </Link>

            <Link to="/entertainment" className="linkstyle">
              <li className={`${navtext} ${entertainmentli}`}> Entertainment</li>
            </Link>
            <Link to="/general" className="linkstyle">
              <li className={`${navtext} ${generalli}`}> General</li>
            </Link>
            <Link to="/health" className="linkstyle">
              <li className={`${navtext} ${healthli}`}> Health</li>
            </Link>
            <Link to="/science" className="linkstyle">
              <li className={`${navtext} ${scienceli}`}> Science</li>
            </Link>
            <Link to="/sports" className="linkstyle">
              <li className={`${navtext} ${sportsli}`}> Sports</li>
            </Link>
            <Link to="/technology" className="linkstyle">
              <li className={`${navtext} ${technologyli}`}> Technology</li>
            </Link>
          </ul>
          <button
            type="button"
            className="btn"
            onClick={ontogglebtn}
          >
            <img className='navimg' src={themelogo} alt="theme" />
          </button>
          </div>
        </div>
        <div className="shortnav">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/ddcnijufj/image/upload/v1707904155/4c07d314-022a-47db-af0e-debbbcd5d99b.jpg-output_wbrlnn.png"
              alt="website logo" className='logoimg'
            />
          </Link>
          <div className='options'>
          <button
            type="button"
            className="btn"
            onClick={ontogglebtn}
          >
            <img className='navimg' src={themelogo} alt="theme" />
          </button>
          <button
            type="button"
            className={`${navtext} hamburgerbtn`}
            onClick={this.menuclicked}
          >
            <IoMenu />
          </button>
          </div>
        </div>
        {menudisplay && (
          <div className="menu">
            <ul className="headerlist">
            <Link to="/" className="linkstyle">
              <li className={`${navtext} ${homeli}`}> Home</li>
            </Link>

            <Link to="/business" className="linkstyle">
              <li className={`${navtext} ${businessli} `}> Business</li>
            </Link>

            <Link to="/entertainment" className="linkstyle">
              <li className={`${navtext} ${entertainmentli}`}> Entertainment</li>
            </Link>
            <Link to="/general" className="linkstyle">
              <li className={`${navtext} ${generalli}`}> General</li>
            </Link>
            <Link to="/health" className="linkstyle">
              <li className={`${navtext} ${healthli}`}> Health</li>
            </Link>
            <Link to="/science" className="linkstyle">
              <li className={`${navtext} ${scienceli}`}> Science</li>
            </Link>
            <Link to="/sports" className="linkstyle">
              <li className={`${navtext} ${sportsli}`}> Sports</li>
            </Link>
            <Link to="/technology" className="linkstyle">
              <li className={`${navtext} ${technologyli}`}> Technology</li>
            </Link>

              <button
                type="button"
                className={`${navtext} hamburgerbtn`}
                onClick={this.closebtn}
              >
                <IoCloseOutline />
              </button>
            </ul>
          </div>
        )}
      </nav>
    )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default withRouter(Header)
