import React, { Component } from "react";
import { Paper } from "@material-ui/core";

class PaperPdf extends Component {
  render() {
    const { children, ...rest } = this.props;
    return (
      <Paper variant="outlined" square {...rest}>
        {children}
      </Paper>
    );
  }
}

export default PaperPdf;
