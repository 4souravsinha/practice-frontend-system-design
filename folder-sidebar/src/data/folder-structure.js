

// Function to generate a random unique key
function generateKey() {
  return Math.random().toString(36).substr(2, 9);
}

// Function to create a file or folder object
function createObject(name, type) {
  return {
    name,
    type,
    key: generateKey()
  };
}

// Create the file system structure
export const fileSystem = {
  name: 'root',
  type: 'folder',
  key: generateKey(),
  children: [
    {
      name: 'folder1',
      type: 'folder',
      key: generateKey(),
      children: [
        createObject('file1', 'file'),
        createObject('file2', 'file'),
        {
          name: 'folder2',
          type: 'folder',
          key: generateKey(),
          children: [
            createObject('file3', 'file'),
            createObject('file4', 'file')
          ]
        }
      ]
    },
    createObject('file5', 'file'),
    createObject('file6', 'file'),
    {
      name: 'folder3',
      type: 'folder',
      key: generateKey(),
      children: [
        createObject('file7', 'file')
      ]
    }
  ]
};
