let layer1 = document.getElementById("layer1");
let layer2 = document.getElementById("layer2");
let layer3 = document.getElementById("layer3");
let layer4 = document.getElementById("layer4");
let layer5 = document.getElementById("layer5");
let layer6 = document.getElementById("layer6");

window.addEventListener('scroll', function(){
    var scroll = window.scrollY;
    var value = (scroll * scroll) / 700;
    var shift = window.innerWidth * 0.02
    
    layer1.style.left = ((value * 0.2)-shift) + 'px';
    layer1.style.top = value * 0.8 + 'px';
    
    
    layer2.style.top = value * 0.9 + 'px';
    
    layer3.style.left = ((value * 0.2)-shift) + 'px';
    layer3.style.top = value * 1.1 + 'px';
    
    layer4.style.left = ((-value * 0.4)-shift) + 'px';
    layer4.style.top = value * 1.6 + 'px';
    
    layer5.style.left = ((value * 0.1)-shift) + 'px';
    layer5.style.top = value * 1.2 + 'px';
    layer6.style.top = value * 1.5 + 'px';
    
});