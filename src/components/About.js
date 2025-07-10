import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="m-2 p-2">
      <h1>About</h1>
      <h2>This is about page</h2>
      <UserClass name="Keshav" location="India" email="abc@gmail.com" />
    </div>
  );
};

export default About;
