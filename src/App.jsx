import React from "react";
import Tree from "./pages/index";

const App = () => {
  const tree = {
    id: 1,
    children: [],
  };

  return (
    <div>
      <Tree node={tree} level={0} />
    </div>
  );
};

export default App;
