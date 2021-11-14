import ContactUsForMain from './ContactUsForMain';
import ProductsForMain from './ProductsForMain';
import BoardForMain from './BoardForMain';
// import { useContext } from 'react';
import { mainScrollContext } from './Main';
export default function MainSecond(props) {
  // const scrollStartRef = useContext(mainScrollContext);
  return (
    <div className="mainSecond" ref={props.mainScrollRef}>
      {/* <BoardForMain></BoardForMain> */}
      <div className="productAndContactContainer">
        <ProductsForMain></ProductsForMain>
        <ContactUsForMain></ContactUsForMain>
      </div>
    </div>
  );
}
