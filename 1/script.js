// hook into canvas
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

// set width and height to same values as set in style.css to ensure proper scaling
canvas.width = 479;
canvas.height = 317;

// create new image obj and set source to path
const img1 = new Image();
img1.src = 'image1.png';

// add event listener to render image on load
img1.addEventListener('load', function(){
    ctx.drawImage(img1, 0,0);

    const scannedImg = ctx.getImageData(0,0,canvas.width, canvas.height);
    const imageData = scannedImg.data;

    // set to grayscale by setting each rgb val to average
    for(let i = 0; i < imageData.length; i += 4){
        const total = imageData[i] + imageData[i + 1] + imageData[i + 2];
        const avgColorVal = total/3;
        imageData[i] = avgColorVal;
        imageData[i + 1] = avgColorVal;
        imageData[i + 2] = avgColorVal;
    }
    scannedImg.data = imageData;
   ctx.putImageData(scannedImg, 0, 0);
});