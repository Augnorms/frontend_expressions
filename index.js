let numberOfChars = 0;

function makeExpression() {
  numberOfChars = document.querySelector('.set-characters-form__input').value;
  document.querySelector('.set-characters-form__input').value = '';
  render();
}

function evaluateExpression() {
  // TODO: Write your code here
  const parentboxes = document.querySelector('.expression-boxes-list');
  const answerinput = document.querySelector('.expression-answer-form__input');
  let siblings = parentboxes.children; //array of children of parent boxes.
  
  let arr = [];

  for(i=0; i<siblings.length; i++){
    
      arr.push(siblings[i].value);
  
  }


  let reduce = arr.reduce((curr, elem)=>{

     return curr + Number(elem);

  },0);



 if(Number.isInteger(reduce))
  {
    
    answerinput.value = reduce;

  }else{
    
    answerinput.value = "ERR";
  }

 render(); 
}


function render() {
  const container = document.querySelector('.expression-boxes-list');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  document.querySelector('.expression-answer-form__btn').disabled = (numberOfChars === 0);
  for (let i = 0; i < numberOfChars; i++) {
    const box = document.createElement('input');
    box.type = 'text';
    box.className = `expression-boxes-list__item`;
    box.maxLength = '1';
    container.appendChild(box);
  }
}

document.querySelector('.set-characters-form').addEventListener('submit', (event) => {
  event.preventDefault();
  makeExpression();
});


document.querySelector('.expression-answer-form').addEventListener('submit', (event) => {
  event.preventDefault();
  evaluateExpression();
});

render();

