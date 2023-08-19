import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop horizontal sorting
 */
@Component({
  selector: 'cdk-drag-drop-horizontal-sorting-example',
  templateUrl: 'cdk-drag-drop-horizontal-sorting-example.html',
  styleUrls: ['cdk-drag-drop-horizontal-sorting-example.css'],
})
export class CdkDragDropHorizontalSortingExample {
  bpm : number = 60;
  lastBmp : number = 60;
  partitions: any[] = [];
  partitionLine: any = [['1',60], ['6',30], ['3',120], ['3'], ['2°',90]];
  partitionLine2: any = [['1',60], ['6',30], ['3',120], ['3'], ['2°',90]];
  activateReorder: boolean = true;

  constructor() {
    this.partitions.push(this.partitionLine);
    this.partitions.push(this.partitionLine2);
  }

  ngOnInit() {}

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  drop2(event: CdkDragDrop<any[]>) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
  sup(index_notes: any, index_partitions: any) {
    console.log('delete', index_notes);
    console.log('index_partitions', index_partitions);
    this.partitions[index_partitions].splice(index_notes, 1);
  }
  add(index_partitions: any) {
    this.partitions[index_partitions].push(['1',this.lastBmp]);
  }

  addPartion() {
    this.partitions.push([]);
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
