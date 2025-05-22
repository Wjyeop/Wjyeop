import { useEffect, useState } from "react";

function FirstCover() {

  const [showScrollDown, setShowScrollDown] = useState(true);

useEffect(() => {
const handleScroll = () => {
const scrollTop = window.scrollY;
const windowHeight = window.innerHeight;

  if (scrollTop > windowHeight) {
    setShowScrollDown(false);
  } else {
    setShowScrollDown(true);
  }
};

window.addEventListener('scroll', handleScroll);

return () => {
  window.removeEventListener('scroll', handleScroll);
};
}, []);

  return (
    <div className="first-cover">
      <div className="text">
        <h1>Find treasure</h1>
      </div>
      {showScrollDown && (
        <div className="scroll-down-indicator">
        {/* <span className="scroll-text">Scroll Down</span> */}
        <div className="arrow-down"></div> {/* CSS로 화살표 그리기 또는 아이콘 사용 */}
      </div>
      )}
      
    </div>
  );
}

export default FirstCover;