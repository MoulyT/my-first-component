import Profile from "./Profile";
import { render } from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

export default function Gallery() {
  return (
    <section className="galery">
      <h1 className="galery__name">Katherine Johnson</h1>
      <Profile />
    </section>
  );
}
render(<Gallery />, document.getElementById("root"));

//root.render(Gallery);
