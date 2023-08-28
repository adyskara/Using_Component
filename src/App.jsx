import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import DanDan from "./image/Dan-Dan-Noodles-10.jpg";
import Tteokbokki from "./image/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg";
import ChickenRamen from "./image/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg";
import Bibimbap from "./image/DWELL-bibimbap.jpg";
import YangzhouFriedRice from "./image/Yangzhou-Fried-Rice1.jpg";
function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Asian's Kitchen</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Tteokbokki}
                title="Tteokbokki"
                category="Korea"
                price="10.99"
                description="Spicy rice cakes, serving with fish cake."
              />
            </div>
            <div className="column">
              <Course
                image={ChickenRamen}
                title="Chicken Ramen"
                category="Japan"
                price="7.99"
                description="Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg."
              />
            </div>
            <div className="column">
              <Course
                image={Bibimbap}
                title="Bibimbap"
                category="Korea"
                price="8.99"
                description="Boiling vegetables, serving with special hot sauce"
              />
            </div>
            <div className="column">
              <Course
                image={DanDan}
                title="Dan Dan Mian"
                category="China"
                price="5.99"
                description="Dan dan noodle, serving with green onion"
              />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Course
                image={YangzhouFriedRice}
                title="Yangzhou Fried Rice"
                category="China"
                price="12.99"
                description="Yangzhou style fried rice, serving with bean and pickles"
              />
            </div>
            <div className="column">
              <Course
                image="https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg"
                title="Onigiri"
                category="Japan"
                price="9.99"
                description="Rice Sandwich, serving with soy sauce"
              />
            </div>
            <div className="column">
              <Course
                image="https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg"
                title="Jajangmyeon"
                category="Korea"
                price="15.99"
                description="Black bean sauce noodle, serving with green onion"
              />
            </div>
            <div className="column">
              <Course
                image="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg"
                title="Ma Yi Shang Shu"
                category="China"
                price="12.99"
                description="Hot pepper sauce noodle, serving with soy bean and onion"
              />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Course
                image="https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg"
                title="Doroyaki"
                category="Japan"
                price="3.99"
                description="Red bean paste dessert, serving with honey."
              />
            </div>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
