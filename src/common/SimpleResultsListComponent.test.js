import { render, screen } from '@testing-library/react';
import {SimpleResultList} from './SimpleResultListComponent';
import '@testing-library/jest-dom';

describe('Shows list of results', () => {
  it("shows empty result list with empty results", () => {
    render(<SimpleResultList />);
    expect(screen.getByTestId("result-list")).toBeEmptyDOMElement();
  });

  it("shows empty result list with no results", () => {
    render(<SimpleResultList />);
    expect(screen.getByTestId("result-list")).toBeEmptyDOMElement();
  });

  it("shows result list with correct number of items", () => {
      const results = ["A", "B", "C"];
    render(<SimpleResultList results={results} />);

    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByTestId("result-list").querySelectorAll("li")).toHaveLength(results.length);
  });
});
