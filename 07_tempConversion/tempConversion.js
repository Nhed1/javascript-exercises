const ftoc = function(far) {
  let celc = (far - 32) * 5/9
  celc = Math.round(celc * 10) / 10
  return celc
};

const ctof = function(celc) {
  let far = celc * 9/5 + 32 
  far = Math.round(far * 10) / 10
  return far
};
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
