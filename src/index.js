

module.exports = function towelSort (matrix) {
	
	if(!matrix||matrix.length==0) return [];

	matrix.forEach((item,index)=>{
		if (index%2!==0){item.reverse()}
	})
	
	let newArr = matrix.join(',').split(',');
	let result=[];
	
	  for(let i=0;i<newArr.length;i++){
		  result.push(+newArr[i]);
	  }
	   return result;
	}
