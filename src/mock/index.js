export default {



  randomPng(size = 2) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let co = Math.floor(Math.random() * 0xFFFFFF);
        ctx.fillStyle = `#${co.toString(16)}`;
        ctx.fillRect(j, i, 1, 1);
      }
    }
    return canvas.toDataURL('image/png')
  },
}
