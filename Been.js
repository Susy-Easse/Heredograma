class Ser{
    constructor(g,A,f,gg){
        this.alelo=random(["A","a"])+random(["A","a"]); if(A!=undefined){this.alelo=A[0][random([0,1])]+A[1][random([0,1])]}
        if(this.alelo=="aA"){this.alelo="Aa"}
        this.gender=g
        this.G=G.length
        this.data=[]
        this.family=f
        //this.sprite=createSprite(0,0,0,0)
        this.form=(P=this.data,g=this.gender,A=this.alelo[0])=>{fill((A=="A"?"green":"white"));
        (g=="W"?circle(P[0],P[1],(P[3]+P[2]/P[3])):
        (g=="H"?rect(P[0]-P[2]*3/8,P[1]-P[3]*3/8,P[2]*3/4,P[3]*3/4):
        (undefined)))
}
        
        this.input=createInput("").attribute("placeholder","")
        console.log(this.input.elt)
        this.input.elt.onchange=(X,A=this.alelo,V=this.input.value())=>{console.log(V);console.log(A);if(V==A){this.input.remove()}}
    }
    Adjust(Y,X){
    this.data=[(X+1)*width/(1+G[Y].length),(Y+1)*height/(1+G.length),width/(2+G[Y].length),height/(2+G.length)]
    //this.sprite.position.x=this.data[0];this.sprite.position.y=this.data[1]
    //this.sprite.width=this.data[2]*3/4;this.sprite.height=this.data[3]*3/4
    
    this.input.size(this.data[2]/2,this.data[3]/4)
    this.input.position(this.data[0]-this.data[2]/4,this.data[1]-this.data[3]/8)
    }
    
    compare(A,B){if(B==undefined||A==undefined){return "normal"}; 
    if(((A[0].data[0]==B[0].data[0]&&A[1].data[1]==B[1].data[1])||(A[0].data[0]==B[1].data[0]&&A[1].data[0]==B[0].data[0]))&&((A[0].G==B[0].G&&A[1].G==B[1].G)||(A[0].G==B[1].G&&A[1].G==B[0].G))){return "consanguíneo"}}

    static Relation(A,B,t,AY){var Qd=random([1,2,3,4]);console.log(A)
    if(t==""){for(var f=0;f<Qd;f++){if(G[(AY+1)]==undefined){G[(AY+1)]=[]};G[(AY+1)].push(new Ser(random(["W","H"]),[A.alelo,B.alelo],{"Father":[A,B]}))
    console.log(A.family);console.log(B.family);if(A.family["child"]==undefined){A.family["child"]=[]};if(B.family["child"]==undefined){B.family["child"]=[]}
    A.family["child"].push(G[AY+1][G[AY+1].length-1]);B.family["child"].push(G[AY+1][G[AY+1].length-1])}}
    }

    tryMarriage(Y,X){if(random([0,1,2])==2||this.family["Married"]!=undefined){return false};console.log("PASSOU")
    if(random(0,10)<=8.5||G[Y].length==1){console.log("NORMAL")
    G[Y].splice(X,0,new Ser((this.alelo=="W"?"H":this.alelo=="H"?"W":random(["H","W"])),undefined,{"Married":"normal"}));G[Y][X+1].family["Married"]="normal"
    G[Y][X].family["Married"]="normal"
    Ser.Relation(G[Y][X],G[Y][X+1],"",Y); return true
    }
    else{console.log("Co")
    var d=[false,false]
    if(X!=0){if(G[Y][X-1].gender!=this.gender&&G[Y][X-1].family["Married"]==undefined){d[0]=-1}}
    if(X!=G[Y].length-1){if(G[Y][X+1].gender!=this.gender&&G[Y][X+1].family["Married"]==undefined){d[1]=1}}
    console.log(d[0]+" "+d[1])
    if(d[0]==false&&d[0]==false){return false}
    if(d[0]&&!d[1]){
    G[Y][X].family["Married"]=this.compare(G[Y][X].family["Father"],G[Y][X-1].family["Father"])
    G[Y][X-1].family["Married"]=this.compare(G[Y][X].family["Father"],G[Y][X-1].family["Father"])
    Ser.Relation(G[Y][X],G[Y][X-1],"",Y); return true
    }
    if(!d[0]&&d[1]){
    G[Y][X].family["Married"]=this.compare(G[Y][X].family["Father"],G[Y][X+1].family["Father"])
    G[Y][X+1].family["Married"]=this.compare(G[Y][X].family["Father"],G[Y][X+1].family["Father"])
    Ser.Relation(G[Y][X],G[Y][X+1],"",Y); return true
    }
    if(d[0]&&d[1]){var r = random(d)
    G[Y][X].family["Married"]=this.compare(G[Y][X].family["Father"],G[Y][X+r].family["Father"])
    G[Y][X+r].family["Married"]=this.compare(G[Y][X].family["Father"],G[Y][X+r].family["Father"])
    Ser.Relation(G[Y][X],G[Y][X+r],"",Y); return true
    }
    }
    }
}