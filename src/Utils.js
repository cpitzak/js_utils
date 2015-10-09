function Utils() {
};
/**
* Given a variable determine if it is an int
* @param {variable} n the variable to check
* @return {boolean} true if is an int, false if not an int
*/
Utils.prototype.isInt = function(n) {
  if (typeof n === 'undefined' || n === null) {
  	return false;
  }
  return n === parseInt(n, 10);
};
/**
* Given two maps merge them together in a new map and return the new map
* @param {map} map1
* @param {map} map2
* @return {map} the new merged map
*/
Utils.prototype.merge = function(map1,map2) {
	var map3 = {},
		key;
	if (!(typeof map1 === 'undefined' || map1 === null)) {
		for(key in map1) {
			if (map1.hasOwnProperty(key)) {
				map3[key] = map1[key];
			}
		}
	}
	if (!(typeof map2 === 'undefined' || map2 === null)) {
		for(key in map2) {
			if (map2.hasOwnProperty(key)) {
				map3[key] = map2[key];
			}
		}
	}
	return map3;
};