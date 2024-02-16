import ThemeContext from '../../context/ThemeContext'
import './index.css'
const News= props =>{
    const {details}=props
    const {author,companyname,description,imgageurl,publishedat,url,title}=details

    return(
        <ThemeContext.Consumer>
            {
                value=>{
                    const {isDarkTheme}=value
                    const text = isDarkTheme ? 'navtextdark' : 'navtextlight'
                    const bg = isDarkTheme ? 'darks' : 'lights'
                    const shadow=isDarkTheme?'lightshadow':'darkshadow'
                    return(
                        <li className={`item ${bg} ${shadow}`}>
                            <div className='shortimg'>
                                <img className='itemimg' src={imgageurl} alt={title} />
                            </div>
                            <a href={url}>
                                <div className={`newstext ${text}`}>
                                    <h1 className='head'>{title}</h1>
                                    <p>{description}</p>
                                    <p>{publishedat}</p>
                                    <p>{author}</p>
                                    <p>Source:{companyname}</p>
                                </div>
                            </a>
                            <div className='fullimg'>
                                <img className='itemimg' src={imgageurl} alt={title} />
                            </div>
                        </li>
                    )
                }
            }
        </ThemeContext.Consumer>
        
    )
}
export default News