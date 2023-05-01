import "./maillist.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Say goodbye to wasted time and money!</h1>
      <span className="mailDesc">Sign up and choose our services and enjoy both!</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList