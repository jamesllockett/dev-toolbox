import "./common.css";

export function SimpleResultList(props) {
  let list;

  if (props.results && props.results.length > 0) {
    list = props.results.map((v) => {
      return (
        <li>
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
      <ul className="results">{list}</ul>
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
