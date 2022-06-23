import './common.css';

export function SimpleResultList(props) {
  let list;

  if (props.results && props.results.length > 0){
    list = props.results.map(v => {
      return (<li>{v}</li>);
    });
  }

  return (
    <ul className="results">
      {list}
    </ul>
  );
}
