function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "Rami", /*#__PURE__*/

    React.createElement("strong", null, "Hamdi")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/
  
  
  
const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "I'm an"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "Android Developper"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "&"), " More.")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "get in touch"),
    React.createElement("a", { href: "#projects" }, "my portfolio"), /*#__PURE__*/
    React.createElement( 'a', {
        href: 'https://simapps.github.io/ramihamdi/cv/RamiHamdiCV.pdf',
        download: 'RamiHamdiCV.pdf',
        target: '_blank'
    },'My CV'  ) /*#__PURE__*/

    
    ))));






};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Who's this guy?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "My name is Rami."), /*#__PURE__*/
    React.createElement("p", null, "Highly motivated and ambitious, I am a technology enthusiast with an expertise in Android development using Java and Kotlin. With five years of experience as a Navy officer, I possess excellent leadership, discipline, and teamwork skills."), /*#__PURE__*/



    //React.createElement("p", null, "I am committed to continuous learning and eager to contribute to the Master's program in Advanced Engineering of Robotic Systems and Artificial Intelligence.")
    
    ), /*#__PURE__*/






    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "What does he do?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "I'm a Special Forces Officer in the Navy."), /*#__PURE__*/
    React.createElement("p", null, "During my five years of service as a Special Forces Officer in the Navy, I have honed a unique set of skills that have shaped me into a versatile and effective professional. My experience in this role has provided me with valuable attributes that are transferable to various domains."), /*#__PURE__*/




    //React.createElement("p", null, "For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). But, of course, whenever the project requires PHP, I do PHP as well (Wordpress, Laravel, etc).")), /*#__PURE__*/




    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Also an Android Developper."), /*#__PURE__*/
    React.createElement("p", null, "With four years of self-taught experience in Android development, I have acquired a comprehensive skill set that encompasses various aspects of the field. My proficiency in Java and Kotlin, coupled with my knowledge of modern development practices, positions me as a capable and adaptable Android developer."), /*#__PURE__*/





    //React.createElement("p", null, "User interfaces, brochures, books, branding... You name it! As I mentioned, creating pretty things is particularly important for me."))))));








};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    java: 'fab fa-java',
    android: 'fab fa-android',
    kotlin: 'fab fa-korvue' };


  const link = props.link || 'http://';
  const repo = props.repo || '';

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
   // React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ", /*#__PURE__*/
   // React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ", /*#__PURE__*/
    React.createElement("i", { className: "fab fa-google-play" }))))));





};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "My Works"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Here's a list of ", /*#__PURE__*/
    React.createElement("u", null, "most"), " of the projects I've been working on lately.")), /*#__PURE__*/






    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
    React.createElement(Project, {
      title: "Radio FM AM.",
      img: 'https://raw.githubusercontent.com/SimApps/ramihamdi/main/images/radioFmAm.png',
      tech: "android kotlin xml firebase mvvm",
     link: "https://simapps.github.io/ramihamdi/apk/radio-fm-am.apk",
    //  href: 'https://simapps.github.io/ramihamdi/apk/radio-fm-am.apk',
      download: 'radio-fm-am.apk',
      target: '_blank',
      repo: "" }, /*#__PURE__*/

    

    React.createElement("small", null, "Built using Kotlin and xml."), /*#__PURE__*/


    React.createElement("p", null, "This application is a great tool to play Radio stations around the world. It also gives the user the ability to record radio station streams and also from custom URL, work as an alarm radio to wake users on their  favorite Radio station, and synchronize favorite stations between different devices..")), /*#__PURE__*/

   


    React.createElement(Project, {
      title: "Prix En Tunisie.",
      img: 'https://raw.githubusercontent.com/SimApps/ramihamdi/main/images/priEnTunisie.png',
      tech: "android kotlin",
      link: "https://simapps.github.io/ramihamdi/apk/prix_tunisie.apk",
      download: 'radio-fm-am.apk',
      target: '_blank',
      repo: "" }, /*#__PURE__*/

    React.createElement("small", null, "Initialy Built using Kotlin and xml for ui, then migrated to jetpack Compose."), /*#__PURE__*/


    React.createElement("p", null, "The main idea of the project is to compare product prices between different supermarkets, create a shopping list, and save FidCard Barecode.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Pro Inventory.",
      img: 'https://raw.githubusercontent.com/SimApps/ramihamdi/main/images/Inventory.png',
      tech: "android java",
      link: "https://play.google.com/store/apps/details?id=com.asmtunis.proinventory",
      repo: "" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Java, retrofit and xml."), /*#__PURE__*/
    React.createElement("p", null, "I have maintained this app during freelance work with ASM.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Pro Caisse Mobility.",
      img: 'https://raw.githubusercontent.com/SimApps/ramihamdi/main/images/ProCaisseMobility.png',
      tech: "android java",
      link: "https://play.google.com/store/apps/details?id=com.asmtunis.procaissemobility",
      repo: "" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Java, retrofit and xml."), /*#__PURE__*/
    React.createElement("p", null, "I have maintained this app during freelance work with ASM.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Merge pro Caisse Pro Inventory.",
      img: 'https://raw.githubusercontent.com/SimApps/ramihamdi/main/images/asm-googleplay.png',
      tech: "android kotlin",
      link: "https://play.google.com/store/apps/developer?id=ASM+MOBILE",
      repo: "https://play.google.com/store/apps/developer?id=ASM+MOBILE"
     }, 
      /*#__PURE__*/
      
    React.createElement("small", null, "Built using Kotlin, ktor, DaggerHilt, MVVM architecture and JetPack compose."), /*#__PURE__*/
    React.createElement("p", null, "In Progress . . . ")))))); /*#__PURE__*/








};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "Want to ", /*#__PURE__*/
    React.createElement("br", null), "contact me?"), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
    '', /*#__PURE__*/
    React.createElement("span", { className: "mail" }, "rami.hamdi.2023", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-at at" }), "gamail", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-circle dot" }), "com"), ":")), /*#__PURE__*/





    React.createElement(SocialLinks, null)), /*#__PURE__*/
//MORE AT https://formsubmit.co/
    React.createElement("form", { id: "contact-form", action: "https://formsubmit.co/rami.hamdi.2023@gmail.com",method :"POST" }, /*#__PURE__*/
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), /*#__PURE__*/
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message", required: true }), /*#__PURE__*/
      React.createElement("input", { className: "_next", type: "hidden", name: "_next", value: "https://simapps.github.io/ramihamdi/emailsent" }), /*#__PURE__*/
  
     React.createElement("input", { className: "_captcha", type: "hidden", name: "_captcha", value: false }), /*#__PURE__*/
    React.createElement("input", { className: "_autoresponse", type: "hidden", name: "_autoresponse", value: "We will contact you soon" }), /*#__PURE__*/

   
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));


};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Rami Hamdi."), /*#__PURE__*/
    React.createElement(SocialLinks, null))));



};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://play.google.com/store/apps/developer?id=AmiRami",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Google Play Store Account" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-google-play" })), /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/SimApps",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's GitHub Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-github" })), /*#__PURE__*/

    React.createElement("a", {
      href: "https://www.linkedin.com/in/rami-hamdi-57b371149/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Linkedin Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-linkedin" }))));



};



/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));


