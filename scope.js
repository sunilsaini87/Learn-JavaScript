function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);  // out of scope

  two();
}
//   two()  // not defined because it is outside of scope
one();
