import { Link } from "react-router-dom"
import "./Pagenotfound.scss"

const Pagenotfound = () => {
  return (
    <div className="error section-fade-in">
      <h1>404</h1>
      <p>The masterpiece you seek is currently in another gallery.</p>
      <Link to="/" className="back-home">Return to Presence</Link>
    </div>
  )
}

export default Pagenotfound

