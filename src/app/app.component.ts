import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server' , name:'Testserver' , content: 'just a test'},{type:'server' , name:'Testserver' , content: 'just a test'}];
  onServerAdded(serverdata: {serverName: string , serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverdata.serverName,
      content: serverdata.serverContent
    });
  }
  onBlueprintAdded(blueprintData: {serverName: string , serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}
