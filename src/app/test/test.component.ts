import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
   styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  public name = "Prashun";
  public nameModel="";
  public displayNme = false;
  public siteURL = window.location.href;
  public IsDisabled = false;
  public myId = "PropBinding";
  public hasError =false;
  public hasSpecial = true;
  public successClass = {
    "text-danger":this.hasError,
    "text-success":!this.hasError,
    "text-special":this.hasSpecial
  }
  public highlightColor = "purple";
  public titleStyle = {
    color : "blue",
    fontStyle : "italic"
  }
  public greetings = "";
  public color = "black";
  public colors = ["red","blue","green","purple"];

  @Input ('nameInteraction') public inputProperty;
  /*  Output EventEmitter instance to emit event to parent component*/
  @Output() public outputEvent = new EventEmitter;
/* String Pipe */
  public pipeName = "StringPipe";
  public pipeMessage = "welcome to Angular";
  public pipeJson = {
    "firstname":"prashun",
    "lastname" : "roy"
  }
  public date = new Date();

  public pipeText = "Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made";
  constructor() { }

  ngOnInit(): void {
  }
  greatUser(){
    return "Hello " + this.name;
  }
  onClick(event){
    console.log("Event Binding Test")
    this.greetings = "Welcome to Angular Tutorial";
  }
  logMessage(value){
    console.log(value);

  }
  /* EventEmitter method called to fire event to parent component */
  fireEvent(){
    this.outputEvent.emit("Output Event from Child Component");
  }
}
