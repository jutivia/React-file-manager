import React, { useState } from "react";
import folders from "./download.png";
import file from "./downloads.png";

const Files = ({ rootFolderArray }) => {
  const [showOptions, setShowOptions] = useState(false);
 
  return (
    <>
      <div className="root-Folder">
        {rootFolderArray.map((folder, index) => {
          if (folder.indexOf("txt") > 0) {
            return (
              <>
                <div className="file">
                  <div
                    style={{
                      display: "flex",
                      width: "auto",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={file}
                      alt="file"
                      style={{
                        height: "30px",
                        width: "30px",
                        marginRight: "7px",
                      }}
                    />
                    <h4 key={index}>{folder}</h4>
                  </div>
                  <button
                    className="btn"
                    style={{
                      fontWeight: "bold",
                      color: "rgb(13, 102, 80)",
                      backgroundColor: "transparent",
                      paddingTop: "1px",
                      fontSize: "46px",
                      marginTop: "-5px",
                      marginLeft: "0px",
                    }}
                    onHover={() => setShowOptions(true)}
                  >
                    ...
                  </button>
                </div>
              </>
            );
          } else {
            return (
              <div className="file">
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={folders}
                    alt="folder image"
                    style={{
                      height: "30px",
                      height: "30px",
                      marginRight: "7px",
                    }}
                  />
                  <h4 key={index}>{folder}</h4>
                </div>
                <button
                  className="btn"
                  style={{
                    fontWeight: "bold",
                    color: "rgb(13, 102, 80)",
                    backgroundColor: "transparent",
                    padding: "0px",
                    fontSize: "46px",
                    marginTop: "-5px",
                    marginRight: "0px",
                  }}
                  onHover={() => setShowOptions(true)}
                >
                  ...
                </button>
              </div>
            );
          }
        })}
      </div>
      {/* {showOptions && (
        <div>
          <p onClick={deleteFolder}>Delete</p>
        </div>
      )} */}
    </>
  );
};

export default Files;
