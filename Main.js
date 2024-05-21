const message = 'Hello world' // Try edit me
const size = 4;

// Update header text
//document.querySelector('#header').innerHTML = message;

var board = [
  [2,2,8,4],
  [2,0,4,0],
  [0,0,4,8],
  [2,4,0,0]
]

//board = DropDown(board);
//board = DropUp(board);
console.log("f6660pff");
//console.log(board);
Show()

function Update()
{
    board = Add(board);
    Show();
}
function Show(){
    document.querySelector('#board').innerHTML= board.map((value)=>value.toString()).join("<br>");
}
function Add(board){
    var index = Math.ceil(Math.random()*(size*size));
    console.log(index);
    for(var i = 0;;i = (i+1)%size){
        for(var j = 0;;j = (j+1)%size){
          console.log(i,j);
            if(board[i][j] == 0) {
                if(index < 0) {
                    board[i][j] =2;
                    return board;
                }
              else index--;
            }
        }
    }
}

function DropLeft(board){
  board.forEach(LineDrop);
  return board;

  function LineDrop(line){
    for(i = 1;i < size;i++){
      for(j = i;j >= 1;j--){
        if(line[j-1] == 0){
           line[j-1] = line[j];
           line[j] = 0;
        }
        else if(line[j-1] == line[j]) {
          line[j-1] *= 2;
          line[j] = 0;
        }
      }
    }
  }
}
function DropRight(board){
  board.forEach((line)=>line.reverse());
  board = DropLeft(board);
  board.forEach((line)=>line.reverse());
  return board;
}
function DropDown(board){
  board = board.map((row, index) => board.map(col => col[index]).reverse());
  board = DropLeft(board);
  board = board.map((row, index) => board.map(col => col[size - 1 - index]));
  return board;
}
function DropUp(board){
  board = board.map((row, index) => board.map(col => col[board.length - 1 - index]));
  board = DropLeft(board);
  board = board.map((row, index) => board.map(col => col[index]).reverse());
  return board;
}