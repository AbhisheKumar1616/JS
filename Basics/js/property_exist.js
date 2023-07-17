//Write your function here

function propertyExists(obj, path) {
    let currentObj = obj;
  
    for (let i = 0; i < path.length; i++) {
      const property = path[i];
      if (!currentObj || !currentObj.hasOwnProperty(property)) {
        return false;
      }
  
      currentObj = currentObj[property];
    }
  
    return currentObj;
  }
  // Input and output has already been handled for you
  
  
  
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  
  let remainder = '';
  process.stdin.on('data', function (chunk) {
    let lines = chunk.toString().split(' ')
      let t = parseInt(lines[0]);
      for (let i=0;i<t;i++) {
        let obj = lines[(i*2)+1];
        let str = lines[(i*2)+2];
        let arr = []
        for(let c of str) {
            if(c === '\r' || c === '\n') continue
            arr.push(c)
        }
        let ans = propertyExists(JSON.parse(obj),arr)
        process.stdout.write(ans.toString()+'\n');
      }
  
      process.exit()
  });