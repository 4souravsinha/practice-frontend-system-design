import { useState } from "react";

/* eslint-disable react/prop-types */
const FileComponent = ({ name, depth }) => {
  const handlePropogation = (e) => e.stopPropagation();
  return (
    <div
      className={"file"}
      style={{ paddingLeft: `${depth}rem` }}
      onClick={handlePropogation}
    >{`📄 ${name}`}</div>
  );
};

const Folder = ({ folder, depth = 2 }) => {
  const [showChildren, setShowChildren] = useState(false);

  const childrenHandle = (e) => {
    e.stopPropagation();
    setShowChildren(!showChildren);
  };

  if (folder.length === 0) return null;

  if (folder.type !== "folder") {
    return (
      <FileComponent
        name={folder.name}
        key={folder.key}
        depth={depth}
      />
    );
  }

  return (
    <div
      key={folder.key}
      onClick={childrenHandle}
    >
      {!showChildren && (
        <div
          className="folder"
          style={{ paddingLeft: `${depth}rem` }}
        >{`📁 ${folder.name}`}</div>
      )}
      {showChildren && (
        <div
          className="folder"
          style={{ paddingLeft: `${depth}rem` }}
        >{`📂 ${folder.name}`}</div>
      )}
      {showChildren && (
        <div>
          {folder.children.map((blob) => {
            return (
              <Folder
                folder={blob}
                key={blob.key}
                depth={depth + 2}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Folder;
