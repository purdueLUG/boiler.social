const punct = [".", "?", "!"];
const jokes = ["the Turbo Encabulator", ["His Eminence", "Her Eminence", "Their Eminence"], "not Mitch Daniels", "GNU Hurd", "Microsoft Bob", "the Foundation", "the letters S, C, and P", "the Avengers", "the Federal Bureau of Control", "the letter M", "<a href=\"https://xkcd.com/2347/\">many FOSS contributors - thank you</a>!", "<a href=\"https://tta.wtf/\">Transcendental Transit</a>", "an unnerving number of containers", "multi-rooted process trees", "a UNIX system - I know this!", "<code>unshare(2)</code>", "recursive <code>make</code> builds", "speculative execution"];

function random_element(arr) {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

function set_sponsor() {
  const possible = random_element(jokes);
  let joke;
  if (typeof possible === 'string' || possible instanceof String) {
    joke = possible;
  } else {
    joke = random_element(possible);
  }
  if (!punct.some(e => e === joke.slice(-1))) {
    joke += ".";
  }
  document.getElementById("funny-sponsor").innerHTML = joke;
}
