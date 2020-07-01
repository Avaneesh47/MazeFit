class Form{
    constructor(){
        this.name = createInput();
        this.age = createInput();
        this.nameHeading = createElement('h2');
        this.ageHeading = createElement('h2');
        this.title = createElement('h1');
        this.play = createButton('Play');
    }

    display(){
        this.name.position(displayWidth/2-100,displayHeight/2-200);
        this.age.position(displayWidth/2-100,displayHeight/2-100);

        this.nameHeading.html("Name:");
        this.ageHeading.html("Age:");
        
        this.nameHeading.position(displayWidth/2-225,displayHeight/2-225);
        this.ageHeading.position(displayWidth/2-225,displayHeight/2-125);

        this.title.html("MazeFit");
        this.title.position(displayWidth/2-75,displayHeight/2-400);

        this.play.position(displayWidth/2-75,displayHeight/2);

        this.play.mousePressed(()=>{
            player.name = this.name.value();
            player.age = this.age.value();
            console.log(player.name);
            console.log(player.age);
        })
    }
}