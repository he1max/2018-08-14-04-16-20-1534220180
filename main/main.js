module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.max()}
o) 元素数量 = ${sequence.count()}
o) 平均值 = ${sequence.average()}`);
};

class Sequence {
  constructor(array) {
    this.array = array;
  }

  minimum() {
	this.array.sort()
	return this.array[0];                                 //最小值
		
  }

  max() {
	this.array.sort()
	return this.array[this.array.length-1];                                  //最大值
  }
  
  count() {
	return this.array.length;                      //元素数量
  }
  
  average() {
	let sum=0;
	let a=0;
	for(let i=0;i<this.array.length;i++){
		sum+=this.array[i];
	}
	return parseFloat(sum/this.array.length).toFixed(2);              //平均数
  }
}
