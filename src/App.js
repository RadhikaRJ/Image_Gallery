import "./App.css";
import Card from "./components/Card";
import Layout from "./components/Layout";
import { useMemo, useContext } from "react";
import { Context } from "./context";

function App() {
  //Array.apply(null, { length: 9 })
  const { state } = useContext(Context);

  const count = useMemo(() => {
    return `You have ${state.items.length} image${
      state.items.length > 1 ? "s" : " "
    }`;
  }, [state.items]);

  return (
    <Layout>
      <h1 className="text-center">Gallery</h1>
      {count}
      <div className="row">
        {state.items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </Layout>
  );
}

export default App;
