import '../style/home.scss';
import Button from '../components/Button';
import CheckIn from '../components/CheckIn';
import Checkout from '../components/Checkout';
function Home(){
  return(
    <div id="page-home">
      <main>
        <div className="main-container">
        <div>
        <div className="tag">Hellor Traveiers</div>
        <h1>Discorver your life, Travel where you want</h1> 
        <p>Where are you going ?</p>
        <div className="cards1">
          <CheckIn/>
          <Checkout/>
        </div>
        <Button />
        </div>
        </div>
      </main>
      <aside/>
    </div>
  )
}
export default Home;