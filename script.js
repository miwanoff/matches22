
let n = 13;
while (n > 0) {
  alert("Your turn!");
  let m = prompt("Get the matches!");
  /** todo isNaN() m <= 0 or m>3 */
  n -= m;
  alert(n); // ||||||
  if (n <= 0) {
    alert("Your win!");
    break;
  }
  alert("My turn!");
  let random = Math.floor(Math.random() * 3) + 1;
  /* todo */
  alert(n); // ||||||
}
