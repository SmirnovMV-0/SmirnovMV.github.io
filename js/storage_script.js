const form = document.querySelector('form');
const ul = document.querySelector('ul');
const clearButton = document.getElementById('button');
const input = document.getElementById('item');

let itemArray = localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[]

localStorage.setItem('item',JSON.stringify(itemArray));
const data = JSON.parse(localStorage.getItem('item'));

const liMaker = (text)=>{const li = document.createElement('li');
                         li.textContent=text;
                         ul.appendChild(li);
                         const buttonDelete = document.createElement('button');
                         buttonDelete.textContent = "Delete";
                         ul.appendChild(buttonDelete);
                         buttonDelete.addEventListener('click', function(){ul.removeChild(li);
                                                                           itemArray=itemArray.filter(item=>item!==text);
                                                                           localStorage.setItem('items', JSON.stringify(itemArray));
                                                                          });
                         li.appendChild(buttonDelete);
                        }
form.addEventListener('submit', function(event){event.preventDefault();
                                                itemArray.push(input.value);
                                                localStorage.setItem('item',JSON.stringify(itemArray));
                                                liMaker(input.value);
                                               });
data.forEach(item=>{liMaker(item);
                   });

const clearList = () => {
                          ul.innerHTML = ""; // Очистить содержимое ul
                          itemArray = [];    // Очистить массив задач
                          localStorage.removeItem('items'); // Удалить данные из localStorage
                        };
clearButton.addEventListener('click', clearList);
