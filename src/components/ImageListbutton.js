// import { Button } from "@material-ui/core";
// import React, { useState } from "react";

// const ImageListbutton = () => {
//   const [value, setValue] = useState();
//   const openValue = () => {
//     console.log("hello");
//     setValue(value);
//   };
//   return (
//     <>
//       <Button onClick={openValue}>click</Button>
//       <input value={value} type="text" />
//     </>
//   );
// };
// export default ImageListbutton;
import React, { Component } from "react";

class ImageListbutton extends Component {
  static defaultProps = {
    courseContent: [
      "JSX",
      "React Props",
      "React State",
      "React Lifecycle Methods",
      "React Event Handlers",
      "React Router",
      "React Hooks",
      "Readux",
      "React Context",
    ],
  };

  constructor(props) {
    super(props);

    // Set initial state
    this.state = { msg: "React Course", content: "" };

    // Binding this keyword
    this.handleClick = this.handleClick.bind(this);
  }

  renderContent() {
    return (
      <ul>
        {this.props.courseContent.map((content) => (
          <li>{content}</li>
        ))}
      </ul>
    );
  }

  handleClick() {
    // Changing state
    this.setState(true);
  }
  handleClickclose() {
    // Changing state
    this.setState(false);
  }

  render() {
    return (
      <div>
        <h2>Message :</h2>

        <p>{this.state.msg}</p>

        <p>{this.state.content}</p>

        {/* Set click handler */}
        <button onClick={this.handleClick}>Click here to know contents!</button>
        <button onClick={this.handleClickclose}>Click here </button>
      </div>
    );
  }
}

export default ImageListbutton;
