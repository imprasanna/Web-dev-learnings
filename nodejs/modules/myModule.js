// This is an example of a custom module

exports.myTime = function () {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const AmOrPm = hours <= 12 ? "am" : "pm";

  // conversion to 12 hours format
  hrs = hours <= 12 ? hours : hours % 12;

  return `${hrs} : ${minutes} ${AmOrPm}`;
};
