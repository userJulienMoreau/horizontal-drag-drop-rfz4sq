import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
  colors,
  instru,
  instru_names,
  instru_types,
  note,
} from '../models/music';

/**
 * @title Drag&Drop horizontal sorting
 */
@Component({
  selector: 'cdk-drag-drop-horizontal-sorting-example',
  templateUrl: 'cdk-drag-drop-horizontal-sorting-example.html',
  styleUrls: ['cdk-drag-drop-horizontal-sorting-example.css'],
})
export class CdkDragDropHorizontalSortingExample {
  public bpm: number = 60;
  public lastBmp: number = 60;
  public partitions: any[] = [];
  public partitionLine: any = [];
  public activateReorder: boolean = true;
  public kalimba: instru = {
    name: instru_names.Kalimba,
    color: colors.Blue,
    type: instru_types.Percussion,
  };
  public KalimbaNotes: note[] = [
    { id: '°°2', name: ['°°2', 'D'], color: colors.Green, index: 1 },
    { id: '°7', name: ['°7', 'B'], color: colors.Blue, index: 2 },
    { id: '°5', name: ['°5', 'G'], color: colors.Blue, index: 3 },
    { id: '°3', name: ['°3', 'E'], color: colors.Blue, index: 4 },
    { id: '°1', name: ['°1', 'C'], color: colors.Blue, index: 5 },
    { id: '°1', name: ['°1', 'C'], color: colors.Blue, index: 5 },
    { id: '6', name: ['6', 'A'], color: colors.Pink, index: 6 },
    { id: '4', name: ['4', 'F'], color: colors.Pink, index: 7 },
    { id: '2', name: ['2', 'D'], color: colors.Pink, index: 8 },
    { id: '1', name: ['1', 'C'], color: colors.Pink, index: 9 },
    { id: '3', name: ['3', 'E'], color: colors.Pink, index: 10 },
    { id: '5', name: ['5', 'G'], color: colors.Pink, index: 11 },
    { id: '7', name: ['7', 'B'], color: colors.Pink, index: 12 },
    { id: '°2', name: ['°2', 'D'], color: colors.Blue, index: 13 },
    { id: '°4', name: ['°4', 'F'], color: colors.Blue, index: 14 },
    { id: '°6', name: ['°6', 'A'], color: colors.Blue, index: 15 },
    { id: '°°1', name: ['°°1', 'C'], color: colors.Green, index: 16 },
    { id: '°°3', name: ['°°3', 'E'], color: colors.Green, index: 17 },
  ];
  constructor() {
    this.partitions.push(this.partitionLine);
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
    this.partitions[index_partitions].push(['1', this.lastBmp]);
  }

  addPartion() {
    this.partitions.push([]);
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
