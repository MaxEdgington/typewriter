const sentence = "hello there from lighthouse labs \n";

let counter = 0;

for (const char of sentence) {

  counter ++;
  setTimeout(() => {

    process.stdout.write(char);

  }, 50 * counter);

 
}


  