import ContactUsForMain from './ContactUsForMain';
import ProductsForMain from './ProductsForMain';
import BoardForMain from './BoardForMain';

export default function MainSecond() {
  return (
    <div className="mainSecond">
      <BoardForMain></BoardForMain>
      <div className="productAndContactContainer">
        <ProductsForMain></ProductsForMain>
        <ContactUsForMain></ContactUsForMain>
      </div>
    </div>
  );
}
