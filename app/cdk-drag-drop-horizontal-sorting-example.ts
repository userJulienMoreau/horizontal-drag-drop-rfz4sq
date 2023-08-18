import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop horizontal sorting
 */
@Component({
  selector: 'cdk-drag-drop-horizontal-sorting-example',
  templateUrl: 'cdk-drag-drop-horizontal-sorting-example.html',
  styleUrls: ['cdk-drag-drop-horizontal-sorting-example.css'],
})
export class CdkDragDropHorizontalSortingExample {
  partitions: any[] = [];
  partitionLine: any = ['1', '6', '3', '3', '2°'];
  partitionLine2: any = ['1', '6', '3'];

  constructor() {
    this.partitions.push(this.partitionLine);
    this.partitions.push(this.partitionLine2);
  }

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>,index_partitions: any) {
    moveItemInArray(
      this.partitions[index_partitions],
      event.previousIndex,
      event.currentIndex
    );
  }

  // dropped(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(
  //     event.container.data,
  //     event.previousIndex,
  //     event.currentIndex
  //   );
  // }
  sup(index_notes: any, index_partitions: any) {
    console.log('delete', index_notes);
    console.log('index_partitions', index_partitions);
    this.partitions[index_partitions].splice(index_notes, 1);
  }
  add(index_partitions: any) {
    this.partitions[index_partitions].push('1');
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
