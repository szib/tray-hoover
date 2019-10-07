class FileError extends Error {
  constructor(args) {
    super(args);
    this.name = 'File error';
  }
}

export default FileError;
