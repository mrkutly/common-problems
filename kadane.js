var A = [-2, 3, 1, -1, 3];
var maxCurrent = A[0];
var maxGlobal = maxCurrent;

for(i = 1; i < A.length; i++){
  if(A[i] > maxCurrent + A[i]){
    maxCurrent = A[i];
  }else if(A[i] < maxCurrent + A[i]){
    maxCurrent += A[i];
  };
  if(maxCurrent > maxGlobal){
    maxGlobal = maxCurrent;
  }
};


//ALSO COULD JUST USE MATH.MAX INSTEAD OF IF STATEMENTS
for(i = 1; i < A.length; i ++){
  maxCurrent = Math.max(A[i], maxCurrent + A[i]);
  maxGlobal = Math.max(maxCurrent, maxGlobal);
};
