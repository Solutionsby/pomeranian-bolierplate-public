import './styles.css';
import one from '../../../Images/MyPhoto/one.jpg';
import three from '../../../Images/MyPhoto/three.jpg';

export function ImigeFile() {
  return (
    <div className="wrapperImageFile">
      <img src={one} alt="" />
      <div className="image"></div>
      <img clasName="photo3" src={three} alt="" />
    </div>
  );
}
