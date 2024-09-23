import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <>
      <button type="button">
        <Link to={props.linkTo}>
          {props.text}
        </Link>
      </button>
    </>
  );
}