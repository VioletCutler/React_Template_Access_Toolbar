import '../stylesheets/Toolbar.css'

const Toolbar = ({ setTheme, changeToolBarDisplay, fontSize, setFontSize }) => {

  function changeTheme(event, themeType){
    setTheme(event.target.id)
    console.log(event.target.id)
  }

  function handleDecreaseTextSize(){
    console.log(fontSize.slice(-1))
    let currentFontSize = fontSize.slice(-1)
    if (currentFontSize > 1) {
      currentFontSize--
    }
    setFontSize(`font-size-${currentFontSize}`)
  }

  function handleIncreaseTextSize(){
    console.log(fontSize.slice(-1))
    let currentFontSize = fontSize.slice(-1)
    if (currentFontSize < 6) {
      currentFontSize++
    }
    setFontSize(`font-size-${currentFontSize}`)
  }

  return (
    <div id="toolbar-container">
      <div id="toolbar-modal-backdrop" onClick={changeToolBarDisplay}></div>
      <div id="toolbar">
        <h2 id="accessibility-header">Accessibility Toolbar</h2>
        <p id="increase-text" onClick={handleIncreaseTextSize}>Increase Text Size</p>
        <p id="decrease-text" onClick={handleDecreaseTextSize}>Decrease Text Size</p>
        <p id="high-contrast" onClick={changeTheme}>High Contrast</p>
        <p id="negative-contrast" onClick={changeTheme}>Negative Contrast</p>
        <p id="light-mode" onClick={changeTheme}>Light Mode</p>
        <p id="grayscale" onClick={changeTheme}>Grayscale</p>
      </div>
    </div>
  );
};

export default Toolbar