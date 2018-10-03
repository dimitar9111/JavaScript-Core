function printVolumeArea(radius, height) {
    let volume = Math.PI * radius * radius * (height / 3);
    let slant = height * height + radius * radius;
    let area = Math.PI * radius * (radius + Math.sqrt(slant));

    console.log(`volume = ${volume}`)
    console.log(`area = ${area}`)
}

printVolumeArea(3, 5);

