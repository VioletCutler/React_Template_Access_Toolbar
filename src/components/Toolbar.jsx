import '../stylesheets/toolbar/toolbar.css'

const Toolbar = ({ theme, setTheme, changeToolBarDisplay, fontSize, setFontSize }) => {

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
    <div id="toolbar-container" className={`${theme}-toolbar-container`}>
      <div id="toolbar-modal-backdrop" onClick={changeToolBarDisplay}></div>
      <div id="toolbar" className={`${theme}-toolbar`}>
        <h2 className={`${theme}-toolbar-option`}id="accessibility-header">Accessibility Toolbar</h2>
        <p className={`${theme}-toolbar-option`} id="increase-text" onClick={handleIncreaseTextSize}>Increase Text Size</p>
        <p className={`${theme}-toolbar-option`} id="decrease-text" onClick={handleDecreaseTextSize}>Decrease Text Size</p>
        <p className={`${theme}-toolbar-option`} id="high-contrast" onClick={changeTheme}>High Contrast</p>
        <p className={`${theme}-toolbar-option`} id="negative-contrast" onClick={changeTheme}>Negative Contrast</p>
        <p className={`${theme}-toolbar-option`} id="light-mode" onClick={changeTheme}>Light Mode</p>
        <p className={`${theme}-toolbar-option`} id="dark-mode" onClick={changeTheme}>Dark Mode</p>
        <p className={`${theme}-toolbar-option`} id="grayscale" onClick={changeTheme}>Grayscale</p>
      </div>
    </div>
  );
};

export default Toolbar