// 


const attrCircle = {cx: 100,cy: 100, r: 60,fill: "blue",stroke: "purple",};
const attrText = {x: 100,y: 110,"text-anchor": "middle","text-color": "black","font-size": "20px" };
const attrSvg = {height: "100em",width: "100em",}
const divTag = document.getElementById("createsvg");    
document.body.appendChild(divTag);
    const svgTag = document.createElementNS("http://www.w3.org/2000/svg","svg");
    Object.keys(attrSvg).forEach(key => {
    svgTag.setAttribute(key, attrSvg[key]);
    })
    divTag.appendChild(svgTag)
    const circleTag = document.createElementNS("http://www.w3.org/2000/svg","circle");
    
    Object.keys(attrCircle).forEach(key => {
    
    circleTag.setAttribute(key, attrCircle[key]);
    
    })
    svgTag.appendChild(circleTag);
    const textTag = document.createElementNS("http://www.w3.org/2000/svg","text");
    
    Object.keys(attrText).forEach((key) => {
    
    textTag.setAttribute(key,attrText[key]);
    
    });
    textTag.appendChild(document.createTextNode("I am love SVG"));
    svgTag.appendChild(textTag);