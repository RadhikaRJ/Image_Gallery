import "./App.css";
import Card from "./components/Card";
import Layout from "./components/Layout";
import { useMemo, useContext, useEffect } from "react";
import { Context } from "./context";
//import app from "./lib/firebase.config";
import Firestore from "./handlers/firestore";

// const { readDocs } = Firestore;

function App() {
  //Array.apply(null, { length: 9 })
  const { state, read } = useContext(Context);

  const count = useMemo(() => {
    return `You have ${state.items.length} image${
      state.items.length > 1 ? "s" : " "
    }`;
  }, [state.items]);

  // useEffect(() => {
  //   app();
  // }, []);

  useEffect(() => {
    read();
  }, []);
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
