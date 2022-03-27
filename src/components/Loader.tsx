import './Loader.scss';

const Loader: React.FC<{color?: string, size?: string}> = ({color, size}) => {
  return (
    <div className={`ripple ${color ? color : null} ${size ? size : null}`}>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
