//1
function countToTwenty() {
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }
}

//2
function countFromTwenty() {
    for(let i = 20; i >= 1; i--) {
      console.log(i);
  }
}

//3
function countToN(int) {
    for(let i = 1; i <= int; i++){
        console.log(i);
    }
}


//4
function countFromN(num) {
    for(let i = num; i >= 1; i--) {
        console.log(i);
    }

}

//5
function countEveryOdd(int) {
    for(let i = 1; i <= int; i += 2) {
        console.log(i);
    }

}

// Call
// countToTwenty();
// countFromTwenty();
// countToN(10);
// countFromN(10);
// countEveryOdd(10);
