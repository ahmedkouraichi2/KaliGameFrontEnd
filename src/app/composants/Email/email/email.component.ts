import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {Observable} from 'rxjs';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmailEnvoyerComponent } from '../email-envoyer/email-envoyer.component';
import { Langage } from 'src/app/services/model/langage';
import { Details } from './Details';
import { DomainHttpService } from 'src/app/services/serviceApi/email/domain-http.service';
import { ComplexFormService } from '../complex-form.service';





@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {






  reEamil:string ="";



  listeChoix:Langage[]=[
    new Langage(1,"Angular"),
     new Langage(2,"SpringBoot"),
  ]
 
   touteLangage :Langage[]= [];
   details = new Details();
   langages: Langage[] = [];
   listLangage: Langage[] = [];
   title = 'EmailTemplate';
   quarterList: Array<any> = [];
   public loadContent: boolean = false;
   public name = 'Cricketers';
   public data = [];
   public settings = {};
   public selectedItems = [];
 
 
 
 
 
 
 
 
   mainForm!: FormGroup;
   personalInfo!: FormGroup;
   contactPreferenceCtrl!: FormControl;
   phoneCtrl!: FormControl;
   emailCtrl!: FormControl;
   confirmEmailCtrl!: FormControl;
   emailForm!: FormGroup;
   passwordCtrl!: FormControl;
   confirmPasswordCtrl!: FormControl;
   loginInfoForm!: FormGroup;
 
   showEmailCtrl$!: Observable<boolean>;
   showPhoneCtrl$!: Observable<boolean>;
 
   showEmailError$!: Observable<boolean>;
   showPasswordError$!: Observable<boolean>;
 
   loading = false;
 
 
 
 
 
 
 
 
   constructor(
     private formBuilder: FormBuilder,
     private complexFormService: ComplexFormService,
     private domainService: DomainHttpService,
     public dialog: MatDialog
 
 
 
   ) {}
 
   ngOnInit(): void {
 
     this.initFormControls();
     this.initMainForm();
    
      this.listLangages();
      this.details.langages = this.listeChoix;
      console.log("thisthis.details.langages = this.listeChoix;",this.details.langages)
   //  this.onGetAllProdcuts();
 
 
 
   }
 
 
 
 
 
 
 
   private initMainForm() {
     this.mainForm = this.formBuilder.group({
       personalInfo: this.personalInfo,
       contactPreference: this.contactPreferenceCtrl,
       email: this.emailForm,
       phone: this.phoneCtrl,
       loginInfo: this.loginInfoForm,
     });
   }
 
   private initFormControls(): void {
     this.personalInfo = this.formBuilder.group({
       firstname: ['', Validators.required],
       lastname: ['', Validators.required],
     });
     this.contactPreferenceCtrl = this.formBuilder.control('email');
     this.phoneCtrl = this.formBuilder.control('');
     this.emailCtrl = this.formBuilder.control('');
     this.confirmEmailCtrl = this.formBuilder.control('');
     this.emailForm = this.formBuilder.group(
       {
         email: this.emailCtrl,
         confirm: this.confirmEmailCtrl,
       },
       {
        
         updateOn: 'blur',
       }
     );
 
     this.passwordCtrl = this.formBuilder.control('', Validators.required);
     this.confirmPasswordCtrl = this.formBuilder.control(
       '',
       Validators.required
     );
     this.loginInfoForm = this.formBuilder.group(
       {
         username: ['', Validators.required],
         password: this.passwordCtrl,
         confirmPassword: this.confirmPasswordCtrl,
       },
       {
        
         updateOn: 'blur',
       }
     );
   }
 
 
 
   private setEmailValidators(showEmailCtrl: boolean) {
     if (showEmailCtrl) {
       this.emailCtrl.addValidators([Validators.required, Validators.email]);
       this.confirmEmailCtrl.addValidators([
         Validators.required,
         Validators.email,
       ]);
     } else {
       this.emailCtrl.clearValidators();
       this.confirmEmailCtrl.clearValidators();
     }
     this.emailCtrl.updateValueAndValidity();
     this.confirmEmailCtrl.updateValueAndValidity();
   }
 
   private setPhoneValidators(showPhoneCtrl: boolean) {
     showPhoneCtrl
       ? this.phoneCtrl.addValidators([
           Validators.required,
           Validators.minLength(10),
           Validators.maxLength(10),
         ])
       : this.phoneCtrl.clearValidators();
 
     this.phoneCtrl.updateValueAndValidity();
   }
 
   getFormControlErrorText(ctrl: AbstractControl) {
     if (ctrl.hasError('required')) {
       return 'Ce champ est requis';
     } else if (ctrl.hasError('email')) {
       return "Merci d'entrer une adresse mil valide";
     } else if (ctrl.hasError('minlength')) {
       return 'Pas assez de caractères';
     } else if (ctrl.hasError('maxlength')) {
       return 'Trop de caractères';
     } else return 'Ce champ contient une erreur';
   }
 
   onSubmitForm() {
   
   }
 
   private resetForm() {
     this.mainForm.reset();
     this.contactPreferenceCtrl.patchValue('email');
   }
 
   selectedQuarterList: any[] = [];
   onItemSelect(event: any, checked:any) {
     const value = this.quarterList.filter((x) => this.selectedQuarterList.indexOf(x) >= 0);
     let first = this.quarterList.findIndex((x) => x == value[0]);
     let last = this.quarterList.findIndex((x) => x == value[value.length - 1]);
     if (last - first + 1 > value.length && !checked) {
     }
 
     for (let i = 0; i < this.selectedQuarterList.length; i++) {
       this.listLangage = this.listLangage.concat({
         id: this.selectedQuarterList[i].item_id,
         name: this.selectedQuarterList[i].item_text,
       });
       this.details.langages = this.listeChoix;
        console.log("listeChoix,thist",this.listeChoix[0].name);
     }
 
     this.listLangage = [];
   }
 
 
 
 
   onSubmit() {
     this.complexFormService.addDetails(this.details).subscribe((res: any) => {
       this.details = res;
       console.log(this.details);
        this.openDialog();
       this.details.name = '';
       this.details.prenom = '';
       this.details.email = '';
       this.details.langages = [];
     });
   }
 
   onRest(){
      this.details.name = '';
       this.details.prenom = '';
       this.details.email = '';
       this.details.langages = [];
 
   }
 
 
 
 
 
 
   listLangages() {
     this.complexFormService.getLangages().subscribe((res: any) => {
       console.log("res",res);
       this.quarterList=res;
 
       for (let i = 0; i < res.length; i++) {
         this.quarterList = this.quarterList.concat({ item_id: res[i].id, item_text: res[i].name });
       }
     });
         console.log("quarterList",this.quarterList)
   }
 
 
 
 
 
   /* onGetAllProdcuts(){
    // this.products$ = this.complexFormService.getAllLang();
    this.domainService.getLangages().subscribe((res: any) => {
     this.touteLangage = res;
     console.log("tuto",this.touteLangage)
 
     });
 
   }*/
 
   openDialog() {
 
     this.dialog.open(EmailEnvoyerComponent, {
       width:'400px',
       data: {
 
       },
     });
   }
 
 
 }
 
 
 /* openDialogDelete(row):void{
   this.dataArray.id=row.id
   this.dialog.open(PageModalDeleteUserComponent,{
     width:'400px',
     data:{
       id:this.dataArray.id
     }
   }).afterClosed().subscribe(resultat=>{
     this.userService.listUser().subscribe((data)=>{
       this.dataSource=new MatTableDataSource<User>(data)
     })
   })
 } */
 
 
 
 
 
 
 
 
 
 
 
