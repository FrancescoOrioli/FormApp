import { Component, OnInit } from '@angular/core';
import {Studente} from "../model/studente";
import {StudenteServiceService} from "../service/studente-service.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.css']
})
export class InsertFormComponent implements OnInit {
private  studenti = [];
private studente : Studente=new Studente();

constructor(private studenteService:StudenteServiceService) {
}

  ngOnInit() {}

  addStudente(event, matricola:string, nome:string, cognome:string,data:string) {


        this.studente.setMatricola(matricola);
        this.studente.setCognome(cognome);
        this.studente.setNome(nome);
        this.studente.setData(data);

    //controllo in console browser
        this.studenti.push(this.studente);
        console.log(this.studenti.length);
        for (let stud of this.studenti) {
          console.log(stud.getNome());
        }
        //salva in Db e si sottoscrive ad un observable
        this.studenteService.studentAddInDb(this.studente).subscribe();
        console.log("salvataggio in Db completato");
  }

  elencoStudentiInDb()
  {
    console.log("stampa record")
    this.studenteService.stampaCampiDb()
  }
    prova()
    {
    let appo :any;
    let flag : boolean = false;
      this.studenteService.prova().subscribe();
      console.log("sono in prova delfront end");
     appo = this.studenteService.prova();
     appo.
      console.log(flag);
}

}
