function validator(obj) {
  const validMethods = [`GET`, `POST`, `DELETE`, `CONNECT`];
  const validVersion = [`HTTP/0.9`, `HTTP/1.0`, `HTTP/1.1`, `HTTP/2.0`];
  const uriValidPattern = /^[\w.]+$/gm;
  const specialChar = [`<`, `>`, `\\`, `&`, "'", '"'];

  if (!validMethods.includes(obj.method)) {
    throw new Error(`Invalid request header: Invalid Method`);
  }
  if (!obj.uri || obj.uri === `*` || !obj.uri.match(uriValidPattern)) {
    throw new Error(`Invalid request header: Invalid URI`);
  }
  if (!validVersion.includes(obj.version)) {
    throw new Error(`Invalid request header: Invalid Version`);
  }
  if (!obj.hasOwnProperty("message")) {
    throw new Error(`Invalid request header: Invalid Message`);
  }

  for (let el of obj.message) {
    if (specialChar.includes(el)) {
      throw new Error(`Invalid request header: Invalid Message`);
    }
  }
  return obj;
}
validator({
  method: "POST",
  uri: "home.bash",
  message: "rm -rf /*",
});
