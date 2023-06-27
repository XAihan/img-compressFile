import imageCompression from 'browser-image-compression';

async function handleCompressFile(imageFile) {
  console.log(imageFile);
  if (!(imageFile instanceof Blob)) {
    console.error('请传入一个blob文件');
    return;
  }
  console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
  console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);
  let compressedFile = null;
  // https://www.npmjs.com/package/browser-image-compression 对应api在这里
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    // useWebWorker: true
  };
  try {
    compressedFile = await imageCompression(imageFile, options);
    console.log(
      'compressedFile instanceof Blob',
      compressedFile instanceof Blob
    ); // true
    console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
  } catch (error) {
    console.log(error);
  }
  return compressedFile;
}

export { handleCompressFile };

