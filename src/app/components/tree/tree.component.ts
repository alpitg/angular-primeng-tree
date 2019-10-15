import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/components/common/treenode';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  files: TreeNode[] = [
    {
      "label": "Documents",
      "data": "Documents Folder",
      "children": [{
        "label": "Work",
        "data": "Work Folder",
        "children": [{ "label": "Expenses.doc", "icon": "fa fa-file-word-o", "data": "Expenses Document" }, { "label": "Resume.doc", "icon": "fa fa-file-word-o", "data": "Resume Document" }]
      },
      {
        "label": "Home",
        "data": "Home Folder",
        "children": [{ "label": "Invoices.txt", "icon": "fa fa-file-word-o", "data": "Invoices for this month" }]
      }]
    },
    {
      "label": "Pictures",
      "data": "Pictures Folder",
      "children": [
        { "label": "barcelona.jpg", "icon": "fa fa-file-image-o", "data": "Barcelona Photo" },
        { "label": "logo.jpg", "icon": "fa fa-file-image-o", "data": "PrimeFaces Logo" },
        { "label": "primeui.png", "icon": "fa fa-file-image-o", "data": "PrimeUI Logo" }]
    },
    {
      "label": "Movies",
      "data": "Movies Folder",
      "children": [{
        "label": "Al Pacino",
        "data": "Pacino Movies",
        "children": [{ "label": "Scarface", "icon": "fa fa-file-video-o", "data": "Scarface Movie" }, { "label": "Serpico", "icon": "fa fa-file-video-o", "data": "Serpico Movie" }]
      },
      {
        "label": "Robert De Niro",
        "data": "De Niro Movies",
        "children": [{ "label": "Goodfellas", "icon": "fa fa-file-video-o", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "fa fa-file-video-o", "data": "Untouchables Movie" }]
      }]
    }
  ];
  selectedFiles: TreeNode[] = [];
  
  selectedFilesList: any[] = [];
  filesCount = 0;

  selectedText = 'Not yet selected';

  

  constructor() { }

  ngOnInit() {
    this.countTotal(this.files);
  }

  nodeSelected(nodeData: any) {
    this.selectedText = nodeData;
   
    this.selectedFilesList =  this.selectedFiles.filter(x => {
      if(!x.children)  { 
        return true  
      } else {
        false
      }
    });
  }

  doSomething(event, item) {
    event.stopPropagation();
    // as before you had
    this.selectedText = item;
  }

  countTotal(list: any) {
    if(list) {
      for (let index = 0; index < list.length; index++) {
        this.recursionChildNode(list[index]);
      }
    }
  }

  recursionChildNode(node: any) {
    if(!node.children) {
      this.filesCount++;
      return;
    } 
    
    for(let i=0 ; i < node.children.length ; i++) {
      this.recursionChildNode(node.children[i]);
    }
  }




}
