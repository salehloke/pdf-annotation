import { promises as fs } from "fs";

export async function randomSvgPath() {
  const commands = ['M', 'L', 'Q', 'C'];
  let path = 'M 0,0 ';

  for (let i = 0; i < 5; i++) {  // You can adjust the number of path segments
    const command = commands[Math.floor(Math.random() * commands.length)];

    if (command === 'M' || command === 'L') {
      const x = Math.floor(Math.random() * 100);
      const y = Math.floor(Math.random() * 100);
      path += `${command} ${x},${y} `;
    } else if (command === 'Q') {
      const x1 = Math.floor(Math.random() * 100);
      const y1 = Math.floor(Math.random() * 100);
      const x = Math.floor(Math.random() * 100);
      const y = Math.floor(Math.random() * 100);
      path += `${command} ${x1},${y1} ${x},${y} `;
    } else if (command === 'C') {
      const x1 = Math.floor(Math.random() * 100);
      const y1 = Math.floor(Math.random() * 100);
      const x2 = Math.floor(Math.random() * 100);
      const y2 = Math.floor(Math.random() * 100);
      const x = Math.floor(Math.random() * 100);
      const y = Math.floor(Math.random() * 100);
      path += `${command} ${x1},${y1} ${x2},${y2} ${x},${y} `;
    }
  }

  return path;
}


