import React, { useState } from "react";
import Files from "./Files";
const Header = () => {
  const [createFolderPopUp, setCreateFolderPopUp] = useState(false);
  const [createFilePopUp, setCreateFilePopUp] = useState(false);
  const [name, setName] = useState("");
  const [fileName, setFileName] = useState("");
  const [rootFolderArray, setRootFolderArray] = useState([]);
  const [filePath, setFilePath] = useState("./root");
  const createFolder = (e) => {
    e.preventDefault();
    if (name) {
      setRootFolderArray([...rootFolderArray, name]);
      setName("");
      setCreateFolderPopUp(false);
    }
    if (fileName) {
      setFileName(`${fileName}.txt`)
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
      <h6>{filePath}</h6>
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
              onChange={(e) => setFileName(e.target.value)}
              id="name"
            />

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
        <Files props={rootFolderArray, setFilePath, setFileName, setName} />
      </main>
    </>
  );
};
export default Header;
