import { useNavigate } from "react-router-dom"

const Contact = () => {
  const navigate = useNavigate();
  return (
      <div className="container">
      <h1>Contact</h1>
      <button onClick={() => navigate('info')}>Info</button> <br/> <br/>
      <button onClick={() => navigate('conform')}>Contact form</button>
    </div>
  )
}

export default Contact