import '../../css/main.css';
import { useMediaQuery } from 'react-responsive';
export default function MainFirst(props) {
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });
  let startATag = null;
  if (!isMobile) {
    startATag = (
      <div className="fontStart">
        <a
          onClick={() => {
            props.scrollFun(props.mainScrollRef);
          }}
        >
          시작하기
        </a>
      </div>
    );
  }
  return (
    // <Parallax speed={30}>
    <div className="mainFirst">
      <div className="fontBox">
        <div className={isMobile ? 'fontReactMobile' : 'fontReact'}>
          <div>REACT</div>
        </div>
        <div className={isMobile ? 'fontWithMobile' : 'fontWith'}>
          <div>WITH</div>
        </div>
        <div className={isMobile ? 'fontBoxPokoMobile' : 'fontBoxPoko'}>
          <div className={isMobile ? 'fontPokoMobile' : 'fontPoko'}>POKO</div>
          {startATag}
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
