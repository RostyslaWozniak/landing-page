import { useState } from "react";
import logo from "../../public/svg/logo.svg"
const Header = () => {
  const [showHeader, setShowHeader] = useState('0')
  const [burgerMenu, setBurgerMenu] = useState(false);

    function headerToggle(){
      let screenArray : number[] = [];
      window.addEventListener('scroll', () => {
          if(window.scrollY < 200) return;
          screenArray.push(window.scrollY);
          const maxNum = Math.max(...screenArray)
          if(maxNum > window.scrollY) {
              screenArray = []
              setShowHeader('0')
          }
          if(screenArray.length > 30){
            setShowHeader('-150px')
            setBurgerMenu(false)
          }
      });
  }
  headerToggle()
  function showRefTo(){
    setBurgerMenu(false);
    
    setTimeout(() => setShowHeader('0'), 1500)
  }
  const topPosition = burgerMenu ? "80px" : "-300px";
  return (
    <header style={{top: showHeader}} className="h-[80px] fixed left-0 top-0 w-screen flex items-center bg-secondary z-20 duration-300">
      <div className="w-[min(1100px,_100%)] mx-auto px-5 flex items-center justify-between text-primary text-[.8rem]">
        <a href="#home" className="cursor-pointer"><img src={logo} alt="logo" className="hover:scale-[120%] duration-300 z-20" /></a>
        <nav style={{top: topPosition}} className=" mx-[30px] bg-secondary absolute tablet:static w-screen tablet:w-[500px] left-[-30px] duration-300 z-[-1] tablet:z-0">
          <ul  className="flex flex-col tablet:flex-row justify-between gap-[50px] pb-[50px] tablet:gap-0 tablet:p-0 text-center">
            <li>
              <a href="#home" className={`hover:underline`} onClick={showRefTo}>ГОЛОВНА</a>
            </li>
            <li>
              <a href="#about" className={`hover:underline`} onClick={showRefTo}>ПРО МЕНЕ</a>
              </li>
            <li>
              <a href="#projects" className={`hover:underline`} onClick={showRefTo}>ВИШИВАНКИ</a>
              </li>
            <li>
              <a href="#contact" className={`hover:underline`} onClick={showRefTo}>КОНТАКТ</a>
              </li>
          </ul> 
        </nav>
        <button
          className="tablet:hidden"
          onClick={() => setBurgerMenu(!burgerMenu)}
        >
          <img src="svg/burger-btn.svg"/> 
        </button>
      </div>
      
    </header>
    );
};
export default Header;



