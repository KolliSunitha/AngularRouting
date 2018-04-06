import { Component, OnInit } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';


@Pipe ({
 // name : 'sqrt'
 name : 'pow'
})

export class CustompipeComponent implements PipeTransform {

    /*transform(val : number) : number {
    return Math.sqrt(val);*/
    transform(val : number , val1: number) : number {
      return Math.pow(val , val1);
    }
  constructor() { }

  ngOnInit() {
  }

}
