function solution(clothes) {
  var mMap = new Map();

  for (var i = 0; i < clothes.length; i++) {
    var key = clothes[i][1];

    if (!mMap.get(key)) {
      mMap.set(key, 1)
    }
    else {
      mMap.set(key, mMap.get(key) + 1)
      // console.log(mMap)
    }
  }
  
  var answer = 1;

  for (var value of mMap.values()) {
    answer *= (value + 1);
  }
  return answer - 1;
}

var clothes =[["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]
console.log(solution(clothes));
