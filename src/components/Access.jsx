import icon from '../assets/accessibility_icon.png'
const Access = ({ toolBarVisibility, changeToolBarDisplay }) => {
  return (
    <footer className={toolBarVisibility ? 'toolbar-icon-toggled' : ''}>
      <img src={icon} onClick={changeToolBarDisplay} alt='Click for Accessibility Options'></img>
    </footer>
  );
};

export default Access