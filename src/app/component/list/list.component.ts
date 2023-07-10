import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private Service: SharedService) {}

  ngOnInit(): void {}
  data: any = {};
  array: any = [];

  submit() {
    console.log(this.data);
    this.array.push(this.data);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  Init() {
    this.ViewList();
  }

  view: any = [];
  add: any = {};
  edit: any = {};
  ViewList() {
    this.Service.ViewList().subscribe({
      next: (data) => {
        this.view = <any>data;
        console.log(data);
      },
      error: () => {},
      complete: () => {},
    });
  }

  Add() {
    this.Service.Add(this.add).subscribe({
      next: (data) => {
        this.Init();
      },
      error: () => {},
      complete: () => {},
    });
  }

  Edit() {
    this.Service.Edit(this.edit).subscribe({
      next: (data) => {
        this.Init();
      },
      error: () => {},
      complete: () => {},
    });
  }

  Delete(id: any) {
    this.Service.Delete(id).subscribe({
      next: (data) => {
        this.Init();
      },
      error: () => {},
      complete: () => {},
    });
  }
}
