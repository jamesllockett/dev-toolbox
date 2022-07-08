import "./common.scss";

export function SimpleResultList(props) {
  let list;

  if (props.results && props.results.length > 0) {
    let index = 1;
    list = props.results.map((v) => {
      return (
        <li key={index++}>
          {v}
          <span
            className="material-symbols-outlined copy-button"
            onClick={(e) => {
              navigator.clipboard.writeText(v);
            }}
          >
            content_copy
          </span>
        </li>
      );
    });
  }

  return (
    <div className="copyable-results">
      <ul className="results" data-testid="result-list">
        {list}
      </ul>
      <div className="copy-column">
        <span
          className="material-symbols-outlined copy-button"
          onClick={(e) => {
            navigator.clipboard.writeText(props.results.join("\n"));
          }}
        >
          content_copy
        </span>
      </div>
    </div>
  );
}
