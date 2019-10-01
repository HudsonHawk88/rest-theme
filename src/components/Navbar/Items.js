import React from "react";
import { Button } from "reactstrap";

class Item extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Button color="link">{children}</Button>
      </React.Fragment>
    );
  }
}

export default Item;
