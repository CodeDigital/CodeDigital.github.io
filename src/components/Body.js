// import '../assets/css/index.scss';

import Footer from './Footer';
import Header from './Header';

const CLIENTSIDE_SCRIPTS = ['jquery.min.js', 
    'p5/p5.min.js', 
    'p5/addons/p5.speech.js',
    'p5/addons/p5.sound.min.js'];


const Body = (props) => {

    React.useEffect(() => {

        // CLIENTSIDE_SCRIPTS.forEach((src) => {
        //     const script = document.createElement("script");
        //     script.src = "./assets/js/" + src;
        //     script.async = true;
        //     document.body.appendChild(script);
        // });

        function endSound() {
          try {
            getAudioContext().close();
          } catch (e) {
            console.log('No Audio Context to close')
          };
        }
      }, []);

    return(<div className="main-body">
        <Header></Header>
        {props.children}
        <Footer></Footer>
    </div>)

};

export default Body;