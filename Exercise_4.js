function func(from, to) {
  let before = from;
  let timeId = setInterval(function() {
    console.log(before);
    if (before === to) {
      clearInterval(timeId);
    }
    before++;
  }, 1000);
}

func(1, 10)