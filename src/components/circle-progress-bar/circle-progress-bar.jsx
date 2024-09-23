import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ( {value, text, size, color} ) => {
    return (
      <div style={{ width: size, height: size }}>
        <CircularProgressbar value={value} text={text} styles={buildStyles({pathColor:color, textColor: color})} />
      </div>
    );
  };
  
  export default CircularProgressBar;