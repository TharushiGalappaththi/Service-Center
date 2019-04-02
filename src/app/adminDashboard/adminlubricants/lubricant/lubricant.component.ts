import { Component, OnInit } from '@angular/core';
import { LubricantService } from 'src/app/shared/lubricant.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lubricant',
  templateUrl: './lubricant.component.html',
  styleUrls: ['./lubricant.component.css']
})

export class LubricantComponent implements OnInit {
hydraulicoil_name = 'Caltex';
  constructor(private service: LubricantService,
    private firestore: AngularFirestore,
    private toaster:ToastrService) { }

  ngOnInit() {
    
    this.resetForm();
    
  }

  resetForm(form ?: NgForm){
    if(form!=null)
      form.resetForm();
      this.service.formData={
        id: null,
        users_id:'',
        engineoil_name: '',
        engineoil_quantity: '',
        circulationoil_name: '',
        circulationoil_quantity: '',
        gearoil_name: '',
        gearoil_quantity: '',
        hydraulicoil_name: '',
        hydraulicoil_quantity: '',

      
    }
  }

  onSubmit(form: NgForm){
    let data=Object.assign({},form.value);
    delete data.id;
    if(form.value.id ==null)
     this.firestore.collection('lubricants').add(data);
    else
     this.firestore.doc('lubricants/'+form.value.id).update(data);
     this.resetForm(form);
    this.toaster.success('Submited Successfully','sda');  

   }
}
