import Header from "../layouts/header";
import Footer from "../layouts/footer";


const About = () => {

return (

    <>
    <Header />
    

    <section className="about-us">
      <div className="about">
        <img src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-8moments-1266810.jpg&fm=jpg" className="pic" />
        <div className="text">
          <h2>About Us</h2>
          <h5>Front-end Developer & </h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
          <div className="data">
            <a href="#" className="hire">Hire Me</a>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
 


    
    
    
    
    
    </>


)

}
export default About;