import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "dummy name",
        location: "dummy location",
        blog: "abc.in",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    //console.log(json)
    this.setState({
      userInfo: json,
    });
  }

  render() {
    //const { name, location, email } = this.props;
    const { name, location, blog } = this.state.userInfo;
    return (
      <div className="text-center shadow-amber-950 shadow-2xl w-52 h-72 m-2 p-2 rounded-xl">
        <h1 className="font-bold m-2 p-2">Count: {this.state.count}</h1>
        <button
          className="bg-blue-500 bg-blend-soft-light p-2 m-2 rounded text-neutral-950 cursor-pointer"
          onClick={() => {
            this.setState({
              count: ++this.state.count,
            });
          }}
        >
          Increment count
        </button>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>{blog}</h3>
      </div>
    );
  }
}

export default UserClass;
