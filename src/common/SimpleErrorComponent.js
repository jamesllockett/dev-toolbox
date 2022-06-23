import './common.css';

export function SimpleError(props) {
  if (!props.error || props.error === ''){
    return (null);
  }

  return(<div className="error">{props.error}</div>);
}
