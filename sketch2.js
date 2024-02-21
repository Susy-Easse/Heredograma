var G1=[],G2=[],G3=[],G4=[],G5=[]
var G=[[]]
var P2=[],P3=[],P4=[],P5=[]
var P1,M1, QdG=2, QdF
var linha = []
var form
var game=0
var resetButton
function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight)
  resetButton = createButton("Reset").class("customButton").style('font-size', (width+height)/32+'px').size(width/4,height/16).position(width*3/8,height/108).mousePressed(()=>{window.location.reload()})
for(var a=0;a<2;a+=1){G[0].push(new Ser("W",undefined,{"Married":"normal"}));G[0].push(new Ser("H",undefined,{"Married":"normal"}));Ser.Relation(G[0][a*2],G[0][a*2+1],"",(0));if(random([1,2])==2){break}}
console.log(G)
for(var g=1;g<G.length;g+=1){console.log(g);for(var gg=0;gg<G[g].length;gg+=1){console.log(g+" "+gg+" teste")
if(G[g].length>=15){continue};if(G.length>=11){g=G.length+1;break};if(G[g][gg].family["Married"]!=undefined||G[g][gg].family["child"]!=undefined){continue}
if(G[g][gg].tryMarriage(g,gg)){console.log(g+" "+gg+" casou");g=0;break}
}}
for(var g in G){for(var gg in G[g]){G[g][gg].Adjust(Number(g),Number(gg))}}


}

function draw() {
  background(200);fill("black");textSize(25);text("Verde = 'A'",100, height/20);text("Branco = 'a'",width-200,height/20)
 
  for(var g in G){for(var gg in G[g]){
  if(G[g][gg].form!=undefined){G[g][gg].form()}
  if(G[g][gg].family["Father"]!=undefined){Linha(G[g][gg].family["Father"][0].data, G[g][gg].family["Father"][1].data, G[g][gg].data, G[g][gg].family["Father"][1].family["Married"])}
  }}
  
//drawSprites()
}
function Linha(M,P,F,t){
  fill("black")

//M ao P
line(M[0],M[1],P[0],P[1])
if(t!="normal"){line(M[0],M[1]-M[3]/4,P[0],P[1]-P[3]/4)}
//F a metade da distancia entre F e M//P
line(F[0],F[1],F[0],F[1]-((F[1]-P[1])/2))
//
line(F[0],F[1]-((F[1]-P[1])/2),M[0]-((M[0]-P[0])/2),F[1]-((F[1]-P[1])/2))
// Metade da distancia entre F e M//P ate metade da distancia entre M e P
line(M[0]-((M[0]-P[0])/2),F[1]-((F[1]-P[1])/2),M[0]-((M[0]-P[0])/2),M[1])

}
