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
}