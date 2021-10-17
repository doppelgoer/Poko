import '../../css/main.css';
import { useEffect, useState } from 'react';
export default function MainFirst() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    // <Parallax speed={30}>
    <div className="mainFirst">
      <div className="fontBox">
        <div className="fontReact">
          <div>REACT</div>
        </div>
        <div className="fontWith">
          <div>WITH</div>
        </div>
        <div className="fontBoxPoko">
          <div className="fontPoko">POKO</div>
          <div className="fontStart">
            <div>시작하기</div>
          </div>
        </div>
        {/* <Parallax speed={10}>
          <div className="fontReact">REACT</div>
        </Parallax>
        <Parallax speed={15}>
          <div className="fontWith">WITH</div>
        </Parallax>
        <Parallax speed={20} className="fontBoxPoko">
          <div className="fontPoko">POKO</div>
          <div className="fontStart">
            <div>시작하기</div>
          </div>
        </Parallax> */}
      </div>
    </div>
    // </Parallax>
  );
}
