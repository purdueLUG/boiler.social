const jokes = ["the Turbo Encabulator", ["His Eminence", "Her Eminence", "Their Eminence"], "not Mitch Daniels", "GNU Hurd", "Microsoft Bob", "the Foundation", "the letters S, C, and P", "the Avengers", "the Federal Bureau of Control", "the letter M", "<a href=\"https://xkcd.com/2347/\">many, many FOSS contributors</a>", "<a href=\"https://tta.wtf/\">Transcendental Transit</a>", "an unnerving number of containers", "multi-rooted process trees", "a UNIX system - I know this", "<code>unshare(2)</code>", "recursive <code>make</code> builds", "speculative execution", "the G-Man's employers", "a tapdancing frog", "$8 blue checkmarks", "generic netlink", "another sponsor I'm forgetting about", "<a href=\"https://mastodon.social/@Richard_Littler/109364310000292806\">gay pensioners Babs & Maureen</a>", "the power of friendship", "several dozen small crabs", "the horror", "a burning hatred"];

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
  document.getElementById("funny-sponsor").innerHTML = joke;
}
