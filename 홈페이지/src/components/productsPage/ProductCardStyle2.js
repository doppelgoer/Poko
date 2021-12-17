import { HomeFilled, HomeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
export default function ProductCardStyle1(props) {
  const [titleIcon, setTitleIcon] = useState('');
  useEffect(() => {
    if (props.titleIcon === 'HomeFilled') {
      setTitleIcon(<HomeFilled />);
    }
  }, []);

  return (
    <div className="productCardStyle2">
      <div>{titleIcon}</div>
      <div>{props.title}</div>
      <div>{props.txt}</div>
    </div>
  );
}
