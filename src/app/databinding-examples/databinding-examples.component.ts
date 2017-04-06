import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding-examples',
  templateUrl: './databinding-examples.component.html',
  styleUrls: ['./databinding-examples.component.css']
})
export class DatabindingExamplesComponent {
  servers = [];
  serverName1 ='';
  addServer(){
    this.servers.push({
      type:'server',
      name:'server-alpha',
      content:'server initialized'
    });
  }

  removeServer(){

    this.servers.pop();
  }

  addnewServer(){
    this.servers.push({
      type:'server',
      name:this.serverName1,
      content:this.serverName1
    });
  }
}
