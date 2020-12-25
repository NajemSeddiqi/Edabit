function signYourName(obj) {
  // write your code here
  // don't use a return statement
  Object.preventExtensions(obj);

  // DON'T CHANGE OR REMOVE THE LINES BELOW
  obj.yourSignature = 'Whatever';
  obj.spouseSignature = 'Nice Try';
  return obj;
}
