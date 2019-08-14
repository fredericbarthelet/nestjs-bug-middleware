import { Injectable, Scope, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({
  scope: Scope.REQUEST,
})
export class AppService {
  public _id;

  constructor (@Inject(REQUEST) private readonly request: Request) {
    this._id = parseInt(Math.round(Math.random()*1000000).toString());
    if (request) {
      console.log('Request is defined in AppService instance '+this._id);
    } else {
      console.log('Request is not defined in AppService instance '+this._id);
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
