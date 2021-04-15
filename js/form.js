class Form {
    constructor(){}
    display(){
        var title= createElement('h1','Multi-Player Car Racing Game');
        title.position(0,0);
        
        var input=createInput('name:');
        input.position(130,160);
        
        var button=createButton ('play');
        button.position(250,200);
        
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount=playerCount+1;
            var greeting=createElement('h3', 'Hello ,' +name);
            greeting.position(130,116);
        })
    }
}
