/*
  An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel,
plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, 
plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.
*/

var floodFill = function(image, sr, sc, color) {
    const CHANGE_COLOR = image[sr][sc];
    const vicited = Array.from({length: image.length}, () => Array(image[0].length).fill(0));
    const b = (img = image, i = sr, j = sc) => {
        if(i < 0 || j < 0 || i > img.length - 1 || j > img[0].length - 1 || vicited[i][j] !== 0 || img[i][j] !== CHANGE_COLOR) return;

        vicited[i][j] = -1;
        img[i][j] = color;
        b(img, i + 1, j);
        b(img, i, j + 1);
        b(img, i - 1, j);
        b(img, i, j - 1);
    }
    b();
    return image;
};
