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

  
  const deleteChildren = (currentNode, nodeId) => {
    if (currentNode.id === nodeId) {
      return [];
    }
    
    const updatedChildren = currentNode.children.map(child => {
      return {
        ...child,
        children: deleteChildren(child, nodeId)
      };
    });
  
    return updatedChildren;
  };
  
  const handleDeleteChildren = () => {
    const updatedTree = deleteChildren(node, node.id);
    
    setChildren(updatedTree);
  };
    
  
  return (
    <div className="margin-left">
      <div>
        {node.id}
        <button onClick={addChild}>+</button>
        <button onClick={handleDeleteChildren}>-</button>
      </div>
      <div>
        {children.map((child) => (
          <Tree key={child.id} node={child} level={level + 1} />
        ))}
      </div>
    </div>
  );
};
export default Tree;
