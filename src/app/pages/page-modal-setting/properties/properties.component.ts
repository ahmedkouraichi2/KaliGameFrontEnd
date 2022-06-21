import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddPropertyComponent} from "../add-property/add-property.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
interface SubDirectories{
  value: boolean;
  ViewValue:boolean;
}
interface IgnoreHiddenFiles{
  value: boolean;
  ViewValue:boolean;
}

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})


export class PropertiesComponent implements OnInit {
  displayedColumns:string[]=['property','value'];
  dataSource=ELEMENT_DATA;
  @Output()propriteValeurSuivre=new EventEmitter<string>();
  @Input() type:string;
  valeurSuivre:string;
  property:string;
  proprieteForm: FormGroup;
  SubDirectoriesForm: FormGroup;
  IgnoreHiddenFilesForm:FormGroup;
  errors = errorMessages;

  @Output()url=new EventEmitter<string>();
  propUrl:string;

  @Output()deep=new EventEmitter<number>();
  propDeep:number;

  @Output()siteMap=new EventEmitter<string>();
  propSiteMap:string;

  @Output()filter=new EventEmitter<string>();
  propFilter:string;

  @Output()inputDirectory=new EventEmitter<string>();
  propInputDirectory:string;

  @Output()filePath=new EventEmitter<string>();
  propFilePath:string;

  @Output()pathSize=new EventEmitter<string>();
  propPathSize:string;

  @Output()bathSize=new EventEmitter<number>();
  propBathSize:number;

  @Output()subDirectorie=new EventEmitter<boolean>();
  propSubDirectories:boolean= false;

  @Output()ignoreHiddenFiles=new EventEmitter<boolean>();
  propIgnoreHiddenFiles:boolean=false;

  @Output()minimumFileAge=new EventEmitter<number>();
  propMinimumFileAge:number;

  @Output()maximumFileAge=new EventEmitter<number>();
  propMaximumFileAge:number;

  @Output()minimumFileSize=new EventEmitter<number>();
  propMinimumFileSize:number;

  @Output()maximumFileSize=new EventEmitter<number>();
  propMaximumFileSize:number;

  @Output()user=new EventEmitter<string>();
  propUser:string;

  @Output()Password=new EventEmitter<string>();
  propPassword:string;

  @Output()object=new EventEmitter<string>();
  propObject:string;

  @Output()fields=new EventEmitter<string>();
  propFields:string;

  @Output()clause=new EventEmitter<string>();
  propClause:string;



  subDirectories: SubDirectories[]=[
    {value:true,ViewValue:true},
    {value:false,ViewValue:false}
  ]
  ingoreHiddenFiles: IgnoreHiddenFiles[]=[
    {value:true,ViewValue:true},
    {value:false,ViewValue:false}
  ]
  constructor(public dialog: MatDialog, private formBuilder: FormBuilder) {
    this.CreateForm();
  }

  ngOnInit(): void {
    // this.initForm();
    console.log(this.type)

  }
  openDialog():void{
    this.dialog.open(AddPropertyComponent,{
      width:'350px'
    });
  }
  SetPropInputDirectory() {
    this.inputDirectory.emit(this.propInputDirectory)
    console.log(this.propInputDirectory)

  }

  SetFilePath() {
    this.filePath.emit(this.propFilePath)
    console.log(this.propFilePath)

  }
  SetPropPathSize() {
    this.pathSize.emit(this.propPathSize)
    console.log(this.propPathSize)

  }
  SetPropBathSize() {
    this.bathSize.emit(this.propBathSize)
    console.log(this.propBathSize)

  }
  SetPropSubDirectories() {
    this.subDirectorie.emit(this.propSubDirectories)
    console.log(this.propSubDirectories)

  }
  SetPropIgnoreHiddenFiles() {
    console.log(this.propIgnoreHiddenFiles)
    this.ignoreHiddenFiles.emit(this.propIgnoreHiddenFiles)

  }
  SetPropMinimumFileAge() {
    this.minimumFileAge.emit(this.propMinimumFileAge)
    console.log(this.propMinimumFileAge)

  }
  SetPropMaximumFileAge() {
    this.maximumFileAge.emit(this.propMaximumFileAge)
    console.log(this.propMaximumFileAge)

  }
  SetPropMinimumFileSize() {
    this.minimumFileSize.emit(this.propMinimumFileSize)
    console.log(this.propMinimumFileSize)

  }
  SetPropMaximumFileSize() {
    this.maximumFileSize.emit(this.propMaximumFileSize)
    console.log(this.propMaximumFileSize)

  }

  SetPropUrl() {
    this.url.emit(this.propUrl)
    console.log(this.propUrl)

  }

  SetPropDeep() {
    this.deep.emit(this.propDeep)
    console.log(this.propDeep)

  }
  SetPropSiteMap() {
    this.siteMap.emit(this.propSiteMap)
    console.log(this.propSiteMap)

  }
  SetPropFilter() {
    this.filter.emit(this.propFilter)
    console.log(this.propFilter)

  }
  SetPropUser() {
    this.filter.emit(this.propUser)
    console.log(this.propUser)

  }
  SetPropPassword() {
    this.filter.emit(this.propPassword)
    console.log(this.propPassword)

  }
  SetPropObject() {
    this.filter.emit(this.propObject)
    console.log(this.propObject)

  }
  SetPropFields() {
    this.filter.emit(this.propFields)
    console.log(this.propFields)

  }
  SetPropClause() {
    this.filter.emit(this.propClause)
    console.log(this.propClause)

  }

  sendPrprieteValueurSuivre() {
    this.propriteValeurSuivre.emit(this.proprieteForm.value.valeurSuivre);
    console.log(this.proprieteForm.value.valeurSuivre)
  }
  initForm(){
    this.proprieteForm=new FormGroup({
      // valeurSuivre:new FormControl(''),
      url:new FormControl(''),
      deep:new FormControl(''),
      siteMap:new FormControl(''),
      filter:new FormControl(''),
    })
  }
  CreateForm(){
    this.proprieteForm= this.formBuilder.group({
      url:['',[
        Validators.required
      ]],
      deep:['',[
        Validators.required
      ]],
      siteMap:['',[
        Validators.required,

      ]],
      filter:['',[
        Validators.required
      ]]/*,
      this.SubDirectoriesForm = this.formBuilder.group({
        inputDirectory:[this.propSubDirectories]
      })*/
      ,
    /*  inputDirectory:['',[
        Validators.required
      ]],*/

      filePath:['',[
        Validators.required
      ]],
      pathSize:['',[
        Validators.required
      ]],

      bathSize:['',[
        Validators.required
      ]],

    /*  subDirectories:['False',[
        Validators.required
      ]],

      ignoreHiddenFiles:['',[
        Validators.required
      ]],*/

      minimumFileAge:['',[
        Validators.required
      ]],

      maximumFileAge:['',[
        Validators.required
      ]],

      minimumFileSize:['',[
        Validators.required
      ]],

      maximumFileSize:['',[
        Validators.required
      ]],

      user:['',[
        Validators.required
      ]],

      password:['',[
        Validators.required
      ]],

      object:['',[
        Validators.required
      ]],

      fields:['',[
        Validators.required
      ]],

      clause:['',[
        Validators.required
      ]],
    })
      ,
      this.SubDirectoriesForm = this.formBuilder.group({
        inputDirectory:[this.propSubDirectories]
      })
      ,

      this.IgnoreHiddenFilesForm = this.formBuilder.group({
        ignoreHiddenFiles:[this.propIgnoreHiddenFiles]
      })
  }
}
export interface Element{
  property:string,
  value : string

}
const ELEMENT_DATA :Element[]=[
  {property:'Valeur a suivre',value:""},
  {property:'Fenêtre de temps',value:""},
  {property:'Longueur de la sous-fenêtre',value:""}
];
export const errorMessages: { [key: string]: string } = {
  url: 'URl must match',
  deep: 'Deep  must match',
  siteMap: 'Site map must match',
  filter: 'Filter must match',
  inputDirectory: 'Input Directory must match',
  filePath: 'File Path  must match',
  patShize: 'Path Size map must match',
  bathSize: 'Site map must match',
  subDirectories: 'Sub Directories must match',
  ignoreHiddenFiles: 'Ignore Hidden Files must match',
  minimumFileAge: 'Minimum File Age  must match',
  maximumFileAge: 'Maximum File Age  must match',
  minimumFileSize: 'Minimum File Size must match',
  maximumFileSize: 'Maximum File Size must match',
  user: 'user must match',
  password: 'password must match',
  object: 'object map must match',
  fields: 'fields must match',
  clause: 'clause must match'
};
