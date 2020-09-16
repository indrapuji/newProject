function checkPath(pathName) {
  let pathStatus = [];
  for (let i = 0; i < pathName.length; i++) {
    if (pathName[i] === "/") {
      pathStatus.push([i]);
    }
  }
  return pathName.substring(Number(pathStatus[1]) + 1, Number(pathStatus[2]));
}

export default checkPath;
