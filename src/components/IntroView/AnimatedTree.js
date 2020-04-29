import React from "react";
import Tree from "../../assets/images/tree_animation.gif";
import "./AnimatedTree.css";

const AnimatedTree = () => {
    return (
        <div id="tree">
            <img className="tree-size" src={Tree} alt="growing healthy plant" />
        </div>
    );
};
export default AnimatedTree;
