import React, { useState, useEffect, useRef } from 'react';
import Blank from './blank.png'
import Snake from './snake.png'
import Food  from './food.png'


const width=10;
const height=10;


function getInitRows() {
  const initRows = [];
  for(let i=0; i<height; i++) {
    initRows.push([]);
    for(let k=0; k<width; k++) {
      initRows[i].push('blank');
    }
  }
  return initRows;
}

const randomPosition = () => {
  return {
    x: Math.floor(Math.random()*width),
    y: Math.floor(Math.random()*height)
  };
};


const SnakeBoard = ({points, setPoints, isPlaying, setIsPlaying}) => {
  const [snake, setSnake] = useState([{x:0,y:0}]);
  const [direction, setDirection] = useState('right');
  const [food, setFood] = useState(randomPosition());

  function paint() {

    const rows = getInitRows();

    snake.forEach(cell => {
      rows[cell.x][cell.y]='snake';
    });

    rows[food.x][food.y]='food';

    return rows;
  }


  const changeDirectionWithKeys = (e) => {
    const { keyCode } = e;
    switch(keyCode) {
      case 37:
        if (direction === 'right') {
          return;
        }
        setDirection('left');
        break;
      case 38:
        if (direction === 'down') {
          return;
        }
        setDirection('top');
        break;
      case 39:
        if (direction === 'left') {
          return;
        }
        setDirection('right');
        break;
      case 40:
        if (direction === 'top') {
          return;
        }
        setDirection('bottom');
        break;
      default:
        setDirection('right');
    }
  };

  document.addEventListener("keydown", changeDirectionWithKeys, false);

  const moveSnake = () => {
    let newBlock;

    switch(direction) {
      case 'right':
        newBlock = {x: snake[0].x, y: (snake[0].y + 1) % width};
        break;
      case 'left':
        newBlock = {x: snake[0].x, y: (snake[0].y - 1 + width) % width};
        break;
      case 'top':
        newBlock = {x: (snake[0].x - 1 + height) % height, y: snake[0].y};
        break;
      case 'bottom':
        newBlock = {x: (snake[0].x + 1) % height, y: snake[0].y};
    }

    for (let block of snake) {
      if (block.x === newBlock.x && block.y === newBlock.y) {
        setIsPlaying(false);
      }
    }
    const newSnake = [newBlock, ...snake];

    if(snake[0].x === food.x && snake[0].y === food.y) {
      const food = randomPosition();
      setFood(food);
      setPoints(points + 1);
    } else {
     newSnake.pop();
    }

    setSnake(newSnake);
  };


  useEffect(() => {
    setTimeout(() => {
      if (isPlaying) {
        moveSnake();
      }
    }, 100);
  }, [snake]);

  const rows = paint();

const displayRows = rows.map(row =>
    <li>
        {row.map(e => {
            switch(e) {
                case 'blank':
                   return <img src={Blank}/>;
                case 'snake':
                   return <img style={{opacity:"0"}} src={Snake}/>;
                case 'food':
                    return <img src={Food}/>
                      }
                 })
        }
    </li>
    );

return (
    <div >
        <ul style={{width:'500px', padding:'0px'}} class='img500'>
        { displayRows }
        </ul>
    </div>
)
};

export default SnakeBoard;
