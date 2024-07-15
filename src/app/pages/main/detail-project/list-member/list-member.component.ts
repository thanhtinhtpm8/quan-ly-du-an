import { Component, OnInit } from '@angular/core';
import {
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-list-member',
  standalone: true,
  imports: [],
  templateUrl: './list-member.component.html',
  styleUrl: './list-member.component.scss'
})
export class ListMemberComponent implements OnInit{
  list_user:any=[];
  constructor(private _bottomSheetRef: MatBottomSheetRef<ListMemberComponent>) {}
  ngOnInit(): void {
    this.list_user=[
      {user:'tinhtt1',name:'Nguyễn Văn A'},
      {user:'tinhtt1',name:'Trình Thanh Tịnh'},
      {user:'tinhtt1',name:'Trần Văn B'},
      // {user:'tinhtt1',name:'Nguyễn Văn A'},
      // {user:'tinhtt1',name:'Trình Thanh Tịnh'},
      // {user:'tinhtt1',name:'Trần Văn B'},
      // {user:'tinhtt1',name:'Nguyễn Văn A'},
      // {user:'tinhtt1',name:'Trình Thanh Tịnh'},
      // {user:'tinhtt1',name:'Trần Văn B'},
      // {user:'tinhtt1',name:'Nguyễn Văn A'},
      // {user:'tinhtt1',name:'Trình Thanh Tịnh'},
      // {user:'tinhtt1',name:'Trần Văn B'},
    ]
  }
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
