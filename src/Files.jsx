import React, { useState } from "react";
import folders from "./download.png";
import file from "./downloads.png";

const Files = ({
  rootFolderArray,
  setFilePath,
  filePath,
  setFileName,
  setName,
  setRootFolderArray,
}) => {
  const [isPreviousFolder, setIsPreviousFolder] = useState(true);
  const [createSubFolder, setCreateSubFolder] = useState(false);

  return (
    <>
      {isPreviousFolder && (
        <div className="root-Folder">
          {rootFolderArray.map((folder, index) => {
            if (folder.indexOf("txt") > 0) {
              return (
                <>
                  <div className="file">
                    <div
                      key={index}
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
                    >
                      ...
                    </button>
                  </div>
                </>
              );
            } else {
              return (
                <div
                  key={index}
                  className="file"
                  onClick={() => {
                    setCreateSubFolder(true);
                    setFilePath(`${filePath}/${folder}`);
                    setIsPreviousFolder(false);
                    setRootFolderArray([]);
                  }}
                >
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
                  >
                    ...
                  </button>
                  {createSubFolder && (
                    <Files
                      rootFolderArray={rootFolderArray}
                      filePath={filePath}
                      setFilePath={setFilePath}
                      setFileName={setFileName}
                      setName={setName}
                      setRootFolderArray={setRootFolderArray}
                    />
                  )}
                </div>
              );
            }
          })}
        </div>
      )}
    </>
  );
};

export default Files;
