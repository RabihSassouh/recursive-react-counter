import React from "react";
import { useState } from "react";
import "../styles/index.css";

const Tree = ({ node, level }) => {
  
  const [children, setChildren] = useState(node.children);

  const addChild = () => {
    const newChildId = children.length + 1;
    const newChild = { id: newChildId, children: [] };
    setChildren([...children, newChild]);
  };

  return (
    <div className="margin-left">
      <div>
        {node.id}
        <button onClick={addChild}>+</button>
      </div>
      <div>
        {children.map((child, index) => (
          <Tree key={child.id} node={child} level={level + 1} />
        ))}
      </div>
    </div>
  );
};
export default Tree;