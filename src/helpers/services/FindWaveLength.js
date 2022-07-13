const findWaveLength = (e, r, t, o, n, a, i) => {
  let s = [];

  for (var u = 0, c = 0, l = 0, m = 0; m < e.length - 1; m++) {
    s.push(e[m]);
    for (var d = 1; i > d; d++) s.push(e[m] + ((e[m + 1] - e[m]) * d) / i);
  }
  s.push(e[e.length - 1]);
  r *= i;
  t *= i;
  for (var g = s.length, f = [], h = 0, w = 0, A = 0; t > d; d++) {
    if (Math.abs(s[d]) > h) {
      w = d;
      h = Math.abs(s[d]);
    }
    A += Math.abs(s[d]);
  }
  if (a > A / t) return -1;
  if (0 === w || w === t) return -1;
  for (
    var C = 0,
      D = 0,
      v = 0,
      y = 0,
      p = 0,
      T = 0,
      F = 0,
      b = 0,
      k = 0,
      d = r;
    t >= d;
    d++
  ) {
    F = 0;
    b = 0;
    C = 0;
    D = 0;
    for (var N = w; g > N; N += d) {
      F += s[N];
      if (0 !== b && g - 5 * i > N) {
        k = s[N] / s[w];
        if (k > 0) {
          if (k > 1) k = 1;
        }
      }
      u = s[N];
      l = s[N - 5 * i];
      c = s[N + 5 * i];

      if (s[w] >= 0) {
        if (u > c && u > l) {
          C += (k * k * k * k * s[w] * o * (t - d)) / t;
          D++;
        } else if (c > u && l > u) {
          C += (k * k * k * k * s[w] * o * (t - d)) / t;
          D++;
        }
      }
      b++;
      b >= n && (N = g);
    }
    F += (C * D) / b;
    F /= b;
    if (F > v) {
      v = F;
      p = d;
    } else if (y > F) {
      y = F;
      T = d;
      f.push(F);
    }
  }
  return s[w] >= 0 ? p / i : T / i;
};

export default findWaveLength;
