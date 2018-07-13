import * as React from "react";
import '../css/styles.css';

export default class FirstComponent extends React.Component<{}> {
  public render() {
    return (
      <div className="centreText">
        {/* React components must have a wrapper node/element */}
        <h1>(▀̿Ĺ̯▀̿ ̿)</h1>
      </div>
    );
  }
}
