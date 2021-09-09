import React from "react";

const Files = ({ rootFolderArray }) => {
  return (
    <div className="root-Folder">
      {rootFolderArray.map((folder, index) => {
        if (folder.indexOf("txt") > 0) {
          return (
            <div className="file">
              <h4 key={index}>{folder}</h4>
              <button style={{ fontWeight: "bold" }}>...</button>
            </div>
          );
        } else {
          return (
            <div className="file">
              <h4 key={index}>{folder}</h4>
              <button className="btn" style={{}}>
                ...
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Files;
