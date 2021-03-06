import React, { useState } from "react";
import Files from "./Files";
const Header = () => {
  const [createFolderPopUp, setCreateFolderPopUp] = useState(false);
  const [createFilePopUp, setCreateFilePopUp] = useState(false);
  const [name, setName] = useState("");
  const [fileName, setFileName] = useState("");
  const [rootFolderArray, setRootFolderArray] = useState([
    "New Folder",
    "Document.txt",
  ]);
  const [filePath, setFilePath] = useState("./root");
  const createFolder = (e) => {
    e.preventDefault();
    console.log(rootFolderArray);
    if (name) {
      setRootFolderArray([...rootFolderArray, name]);
      setName("");
      setCreateFolderPopUp(false);
    }
    if (fileName) {
      setFileName(fileName);
      setRootFolderArray([...rootFolderArray, fileName]);
      setFileName("");
      setCreateFilePopUp(false);
    }
  };
  return (
    <>
      <div className="file-header">
        <h1>File Manager</h1>
        <div clasName="btn-warpper">
          <button
            className="btn"
            onClick={() => {
              setCreateFolderPopUp(true);
              setCreateFilePopUp(false);
            }}
          >
            + Folder
          </button>
          <button
            className="btn"
            onClick={() => {
              setCreateFolderPopUp(false);
              setCreateFilePopUp(true);
            }}
          >
            + File
          </button>
        </div>
      </div>
      <br />
      <h6 style={{ marginLeft: "2.5rem", marginTop: "-1.5rem" }}>{filePath}</h6>
      {createFolderPopUp && (
        <div className="popUpWrapper">
          <div className="createPopUp">
            <h3>Create Folder</h3>
            <label htmlFor="name"> Folder Name</label>
            <br />
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              id="name"
            />
            <br />
            <br />

            <button
              type="submit"
              className="btn"
              onClick={(e) => createFolder(e)}
            >
              Create
            </button>
            <button
              className="btn"
              onClick={() => setCreateFolderPopUp(false)}
              style={{ backgroundColor: "#DC143C", marginLeft: "10px" }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {createFilePopUp && (
        <div className="popUpWrapper">
          <div className="createPopUp">
            <h3>Create File</h3>
            <label htmlFor="name"> File Name</label>
            <br />
            <input
              type="text"
              onChange={(e) => setFileName(e.target.value + '.txt')}
              id="name"
            />

            <br />
            <br />
            <button
              type="submit"
              className="btn"
              onClick={(e) => createFolder(e)}
            >
              Create
            </button>
            <button
              onClick={() => setCreateFilePopUp(false)}
              className="btn"
              style={{ backgroundColor: "#DC143C", marginLeft: "10px" }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <main>
        <Files
          rootFolderArray={rootFolderArray}
          filePath={filePath}
          setFilePath={setFilePath}
          setFileName={setFileName}
          setName={setName}
          setRootFolderArray={setRootFolderArray}
        />
      </main>
    </>
  );
};
export default Header;
