import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tw-transfer',
  templateUrl: './tw-transfer.component.html',
  styleUrls: ['./tw-transfer.component.sass']
})
export class TwTransferComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    this.transferForm = this.fb.group({
        formAccoint:['',Validators.required],
        toAccount:['',Validators.required],
        amount:[null,Validators.required]
    })
   }

  @Input() name : string='';

  @Output() sendData = new EventEmitter();

  transferForm: FormGroup;

  onSubmit() :void{
    if(this.transferForm.valid){
      this.sendData.emit(this.transferForm.value);
    }
  }

  ngOnInit(): void {
  }

}
