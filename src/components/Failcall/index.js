import { Redirect} from 'react-router-dom'
import './index.css'

const Failcall=()=>{
    const renderlink = () => {
        <Redirect to="/" />
      }

    return(
    <div className="failureview">
      <img
        src="https://res.cloudinary.com/dwqcnoig0/image/upload/v1702135344/Group_7522_tebdpe.png"
        alt="failure view"
      />
      <p className="fail">
        Something went wrong, Please try again.
      </p>
      <button type="button" className="retrybtn" onClick={renderlink}>
        Try Again
      </button>
    </div>
)}
export default Failcall