onmessage = function (e) {
  let start = e.data.start;
  let end = e.data.end;
  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += i;
  }
  postMessage(sum);
};
