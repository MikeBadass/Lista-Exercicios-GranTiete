function Primo() {
    let n = Number(document.getElementById("number").value);
    let isPrime = true;
    
    if (n <= 1) {
      isPrime = false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
  
    if (isPrime) {
      document.getElementById("textarea").innerHTML = `O número ${n} é primo`;
    } else {
      document.getElementById("textarea").innerHTML = `O número ${n} não é primo`;
    }
}

  
  
  
  
  
  
  