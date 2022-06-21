import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
export class Processor {
  id:String ;
  type: string;
  version: String;
  tags: String;
  description:String;
  public selected?: boolean = false;

  constructor( processor : Processor ) {
    Object.assign(this, processor);
  }
}
@Component({
  selector: 'app-table-modal-processor',
  templateUrl: './table-modal-processor.component.html',
  styleUrls: ['./table-modal-processor.component.scss']
})
export class TableModalProcessorComponent implements OnInit {
  @ViewChild('filter', {static: false}) filter: ElementRef;
  public processors:Array<Processor> = [
    new Processor({
      id:"1",
      type: 'convertJSONTo SQL',
      version: "1.14.0",
      tags: 'database,rdbms,flat,json,insert,update' +
        ',relational,delete,sql',
      description: `Converts a JSON-formatted FlowFile into an UPDATE, INSERT, or DELETE SQL statement. The incoming FlowFile is expected to be "flat" JSON message, meaning that it consists of a single JSON element and each field maps to a simple type.`
    }),
    new Processor({
      id:"2",
      type: 'ExecuteSQl',
      version: "1.14.0",
      tags: 'database, select, query, jdbc, sql',
      description: `Converts a JSON-formatted FlowFile into an UPDATE, INSERT, or DELETE SQL statement. The incoming FlowFile is expected to be "flat" JSON message, meaning that it consists of a single JSON element and each field maps to a simple type.`
    }),
    new Processor({
      id:"3",
      type: 'ExecuteSQLRecord',
      version: "1.14.0",
      tags: 'database, select, query, record, jdbc, sql',
      description: `Executes provided SQL select query. Query result will be converted to the format specified by a Record Writer. Streaming is used so arbitrarily large result sets are supported. This processor can be scheduled to run on a timer, or cron expression, using the standard scheduling methods, or it can be triggered by an incoming FlowFile.`
    }),
    new Processor({
      id:"4",
      type: 'GenerateTableFetch',
      version: "1.14.0",
      tags: 'database, select, query, fetch, jdbc, generate, sql',
      description: `Generates SQL select queries that fetch "pages" of rows from a table. The partition size property, along with the table's row count, determine the size and number of pages and generated FlowFiles. `
    }),
    new Processor({
      id:"4",
      type: 'GetCouchbaseKey',
      version: "1.14.0",
      tags: 'H',
      description: `Get a document from Couchbase Server via Key/Value access. The ID of the document to fetch may be supplied by setting the <Document Id> property. NOTE: if the Document Id property is not set, the contents of the FlowFile will be read to determine the Document Id, which means that the contents of the entire FlowFile will be buffered in memory.`
    }),
  ];

  public selectedQuestion = this.processors[ 1 ];

  public displayedColumns: string[] = ['type', 'version','tags'];

  public highestIndex = this.processors.length;

  public getQuestion(processor : Processor) {
    this.removeSelection();
    this.selectedQuestion = processor;
    this.selectedQuestion.selected = true;
  }

  private removeSelection() {
    this.processors.map( (processor : Processor) => {
      return processor.selected = false;
    } );
  }

  public changeQuestion(index: number) {
    this.removeSelection();
    this.selectedQuestion = this.processors.filter( (processor : Processor) => {
      return +processor.id == index;
    } )[ 0 ];
    this.selectedQuestion.selected = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
