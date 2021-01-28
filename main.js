const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let endGame;
let x=0;
let y=0;
let width;
let height;
let newField;
let widthField;
let randomField;
let randomHeight;
let randomWidth;
let move;
let difficulty;

class Field {
  constructor(field){
    this._field = field;
  }
  
  get field(){
    return this._field;
  }

  print(){
    
    this.field.forEach(element => {(console.log(element.join('')));
      
    });
    

  }

  static generateField(height,width){
    widthField = Number(width);
     newField = new Array(Number(height));
    for (let i=0;i<newField.length;i++){
      newField[i] = new Array;
    }
      return newField;
  }
}


function randomHole(){
  do{
    randomHeight =(Math.floor(Math.random()*height));
    randomWidth = (Math.floor(Math.random()*width));
}
   while (randomWidth === 0 && randomHeight === 0);
}

function createField(arr){
  for (let j=0;j<arr.length;j++){
    for(let k=0;k<widthField;k++){
      if (Math.random()<(difficulty/10)){
        arr[j].push(hole);
      }else{
        arr[j].push(fieldCharacter);
      }
    }
    arr[0].splice(0,1,pathCharacter);
  }
    randomHole();
    arr[randomHeight].splice(randomWidth,1,hat);
    randomField = new Field(arr);
}


  

  console.log(`\n Help the farmer to find his hat in the field without falling into the holes and without leaving the field. The hat is represented by "^", the holes are represented by "o".\n\n Type Ctrl-C to quit the game\n`);

  do {
    width = prompt ('Enter a number representing the width of the field : ');
  }
  while (isNaN(width));
do {
  
   height = prompt ('Enter a number representing the heigth of the field : ');
  }
    while (isNaN(height));

   do{
      difficulty = prompt (`Enter a number (between 1 and 5) to choose the difficulty (1 is very easy, 5 very difficut) : `);
   }
   while (0>difficulty || difficulty>5) {
   }

Field.generateField(height,width);
createField(newField);




while (endGame !== "win" && endGame !== "lost") {

  console.clear();
  randomField.print();

  

  move = prompt ('Enter a direction (u,d,l,r) and type "enter": ');
  
    if (move === 'r') {
      x++;
        if(x >= width || randomField.field[y][x] === hole) {
         console.log('you lose');
          return endGame = "lost";
        } else if (randomField.field[y][x] === hat) {
          console.log('you win');
            return endGame = "win";
        } else {
          randomField.field[y].splice(x,1,pathCharacter);
          }

        } else if (move === 'l') {
        x--;
         if (x < 0 || randomField.field[y][x] === hole ) {
          console.log( 'you lose');
            return endGame = "lost";
         } else if (randomField.field[y][x] === hat) {
             console.log('you win');
              return endGame = "win";
               }else{
                randomField.field[y].splice(x,1,pathCharacter);
              }

            } else if (move === 'd') {
                y++;
                if (y >= height || randomField.field[y][x] === hole ) {
                  console.log( 'you lose');
                  return endGame = "lost";
                 } else if (randomField.field[y][x] === hat) {
                          console.log('you win');
                          return endGame = "win";
                      } else {
                randomField.field[y].splice(x,1,pathCharacter);
                    }

                  } else if (move === 'u') {
                        y--;
                        if(y < 0 || randomField.field[y][x] === hole) {
                          console.log( 'you lose');
                          return endGame = "lost";
                           } else if (randomField.field[y][x] === hat) {
                              console.log('you win');
                                return endGame = "win";
                              } else {
                                randomField.field[y].splice(x,1,pathCharacter);
                            }
                          }
                        }
                      