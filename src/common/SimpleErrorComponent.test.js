import { render, screen } from '@testing-library/react';
import {SimpleError} from './SimpleErrorComponent';
import '@testing-library/jest-dom';

describe('Shows a simple error box when an error message is provided', () => {
  it("Won't show empty error box", () => {
    let {container} = render(<SimpleError error="" />);

    expect(container).toBeEmptyDOMElement();
  });

  it("Will show error", () => {
    render(<SimpleError error="An error message" />);
    
    expect(screen.getByRole("alert")).toHaveTextContent("An error message");
  });
});
