class GeneratorMatrix {
  
  getMatrix(image, widthSprite, heightSprite) {
    let matrix = [],
        width_current = 0,
        height_current = 0,
        image_loop_height = image.height - heightSprite,
        image_loop_width = image.width - widthSprite;
    //width/heigth da imagem menos o width/height de um sprite
    
    while(height_current <= image_loop_height) {
      while(width_current <= image_loop_width) {
        matrix.push([width_current, height_current]);
        width_current += widthSprite;
      }
      
      width_current = 0;
      height_current += heightSprite;
    }
    return matrix;
  }

  get matrixTroll() { //Peguei a matriz pronta pq ela não estava proporcional, os dois últimos pontos estavam vazios
    return [
      [0,0],
      [400,0],
      [800,0],
      [1200,0],
      [1600,0],
      [0,400],
      [400,400],
      [800,400],
      [1200, 400],
      [1600, 400],
      [0,800],
      [400, 800],
      [800, 800],
      [1200, 800],
      [1600, 800],
      [0, 1200],
      [400, 1200],
      [800, 1200],
      [1200, 1200],
      [1600, 1200], 
      [0, 1600],
      [400, 1600],
      [800, 1600],
      [1200, 1600],
      [1600, 1600],
      [0, 2000],
      [400, 2000],
      [800, 2000],
    ];
  }

  get matrixGotaVoadora () {
    return [
      [0,0],
      [200, 0],
      [400, 0],
      [0, 150],
      [200, 150],
      [400, 150],
      [0, 300],
      [200, 300],
      [400, 300],
      [0, 450],
      [200, 450],
      [400, 450],
      [0, 600],
      [200, 600],
      [400, 600],
      [0, 750],
    ];
  }
}