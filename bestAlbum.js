function solution(genres, plays) {
  var answer = [];

  var mGenres = new Map();

  for (var i = 0; i < genres.length; i++) {
    mGenres.set(plays[i], genres[i])
  }
  console.log(mGenres)
  // mGenres.forEach()
  return answer;
}

var genres = ['classic', 'pop', 'classic', 'classic', 'pop']
var plays = [500, 600, 150, 800, 2500]

solution(genres, plays)
