import { Component, OnInit } from '@angular/core';
import { LubricantService } from 'src/app/shared/lubricant.service';
import { Lubricant } from 'src/app/shared/lubricant.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lubricant-list',
  templateUrl: './lubricant-list.component.html',
  styleUrls: ['./lubricant-list.component.css'] 
})
export class LubricantListComponent implements OnInit {

  list: Lubricant[];
  constructor(private service: LubricantService,
    private firestore: AngularFirestore,
    private toastor: ToastrService
    ) { }

  ngOnInit() {
    this.service.getLubricants().subscribe(actionArray =>{
      this.list = actionArray.map(item =>{
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Lubricant;
      })
    });
  }
  onEdit(lub:Lubricant){
    this.service.formData=Object.assign({},lub);
  }

  onDelete(id:string){
    if(confirm("Are you sure to delete this record ?")){
      this.firestore.doc('lubricants/'+id).delete();
      this.toastor.warning('Deleted Successfully','sa')
    }
  }
}


