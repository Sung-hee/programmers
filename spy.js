function solution(clothes) {
  var answer = 0;
  var json = {};

  clothes.forEach(function(index) {
    if (json[index[1]] >= 1) {
      json[index[1]] += 1;
    }
    else {
      json[index[1]] = 1;
    }
  });

  for (var i in json) {
    answer *= (json[i] + 1)
  }
  return answer - 1;
}

var clothes =[["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]
console.log(solution(clothes));
