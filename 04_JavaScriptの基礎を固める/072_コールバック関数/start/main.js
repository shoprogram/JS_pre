const hello = (callback) => {
  console.log("hello" + callback());
}

hello(() => {
return 'code';
});