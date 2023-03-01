import "../stylesheets/homepage/homepage.css";
const Homepage = ({theme}) => {
  return (
    <div id={`homepage ${theme}-homepage`}>
      <h1>This is the Home Page</h1>
      <div className={`card ${theme}-card`}>
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel lobortis massa. Sed orci ipsum, pretium non ante at, facilisis rhoncus dolor. Suspendisse interdum, enim quis blandit venenatis, erat ligula faucibus lacus, a finibus justo urna at nisl. Pellentesque luctus purus eget augue accumsan aliquam. Nunc venenatis interdum maximus. Sed et bibendum odio, non pulvinar nisi. Cras ac malesuada urna. Sed mauris est, pharetra vitae nibh nec, sodales commodo quam. Praesent elementum luctus lectus, et accumsan nunc congue sit amet. Vivamus sed fermentum justo, euismod imperdiet sapien. Nam molestie id lectus sit amet malesuada. Fusce mi libero, consequat sed diam non, blandit posuere sem.</p>
        </div>
    </div>
  );
};

export default Homepage;
