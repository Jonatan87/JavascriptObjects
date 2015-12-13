/**
 * Created by Jonatan on 2015-12-13.
 */

var myObject = {item1: "1", item2: "2"};

function Screen()
{
    this.Width = 2;
    this.Heigth = 10;
}

Screen.prototype.Color = "Black";

var screen = new Screen();

alert(screen.Color);

alert(myObject.item1);

