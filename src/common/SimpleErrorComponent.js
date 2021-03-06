import "./common.scss";

export function SimpleError(props) {
  if (!props.error || props.error === "") {
    return null;
  }

  return (
    <div className="error" role="alert">
      {props.error}
    </div>
  );
}
