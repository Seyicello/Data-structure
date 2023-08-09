//problem 1
function findDistinctSum(set1, set2) {
    // Initialize sum
    let sum = 0;
  
    // Compare each element of set1 with set2 and add distinct elements to sum
    for (const element of set1) {
      if (!set2.includes(element)) {
        sum += element;
      }
    }
   
    // Compare each element of set2 with set1 and add distinct elements to sum
    for (const element of set2) {
      if (!set1.includes(element)) {
        sum += element;
      }
    }
  
    return sum;
  }
  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  const result = findDistinctSum(set1, set2);
  console.log(result); // Output: 13 (distinct elements 4, 7, 2)
  
//problem2
function dot_product(v1, v2, ps) {
    ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
}


//problem 2
// check Orthogogonality
function checkOrthogonality() {
    const n = Number(prompt("Enter the number of pairs of vectors:"));
    
    for (let k = 1; k <= n; k++) {
        const v1 = prompt("Enter vector v1 (comma-separated values):").split(',').map(Number);
        const v2 = prompt("Enter vector v2 (comma-separated values):").split(',').map(Number);

        let ps = 0;
        dot_product(v1, v2, ps);
        
        if (ps === 0) {
            console.log("Vectors v1 and v2 are orthogonal");
        } else {
            console.log("Vectors v1 and v2 are NOT orthogonal");
        }
    }
}

checkOrthogonality();