import {Component} from 'react'
import {v4} from 'uuid'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Failcall from '../Failcall'
import News from '../News'
import ThemeContext from '../../context/ThemeContext'
import './index.css'


class Business extends Component{
    state={list:[],statuss:''}

    componentDidMount=()=>{
        this.getlist()
    }

    getlist=async ()=>{
        this.setState({statuss:'LOAD'})
        const response=await fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=07deafef12c44217baa04953445a1156')
        if(response.ok){
            const data=await response.json()
            const newdata=data.articles.map(each=>(
                {
                    id:v4(),
                    author:each.author,
                    content:each.content,
                    description:each.description,
                    publishedat:each.publishedAt,
                    companyname:each.source.name,
                    title:each.title,
                    url:each.url,
                    imgageurl:each.urlToImage
                }
                ))
            this.setState({list:newdata,statuss:'SUCCESS'})
        }else{
            this.setState({statuss:'FAIL'})
        }
        
    }

    loading = () => (
        <div className="loader-container">
            <Loader type="TailSpin" color="#8284C7" height={50} width={50} />
        </div>
    )

    successcall=()=>{
        const {list}=this.state
        return(
            <ul className='successlist'>
                {list.map(each=>(
                    <News key={each.id} details={each} />
                ))}
            </ul>
        )
        
    }

    renderingnews = () => {
        const {statuss} = this.state
        switch (statuss) {
          case 'LOAD':
            return this.loading()
          case 'SUCCESS':
            return this.successcall()
          case 'FAIL':
            return <Failcall />
          default:
            return null
        }
      }

    render(){
        return(
            <ThemeContext.Consumer>
                {value=>{
                    const {isDarkTheme}=value
                    const text = isDarkTheme ? 'navtextdark' : 'navtextlight'
                    const bg = isDarkTheme ? 'dark' : 'light'
                    const bgg = isDarkTheme ? 'darks' : 'lights'
                    const shadow=isDarkTheme?'lightshadow':'darkshadow'
                    return(
                        <div className={`${bg}`}>
                            <Header />
                            <h1 className={`${text} maintitle`}>THE BHARAT NEWS</h1>
                            <h1 className={`${text}  ${bgg} ${shadow} title`}>Business</h1>
                            <div>{this.renderingnews()}</div>
                        </div>
                    )
                }}
            </ThemeContext.Consumer>
        )
    }
}

export default Business