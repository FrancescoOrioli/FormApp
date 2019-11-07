export  class  Studente
{
  private matricola: string;
  private nome: string;
  private cognome: string;
  private data: string;
  private prova: string;



  constructor(){}

  getNome(): string
  {
    return this.nome;
  }

  getCognome( ): string
  {
    return this.cognome;
  }

  getMatricola( ): string
  {
    return this.matricola;
  }
getData():string
{
  return this.data;
}

setNome(nome:string)
{
  this.nome=nome;
}

  setCognome(cognome:string)
  {
    this.cognome=cognome;
  }

  setData(data:string)
  {
    this.data=data;
  }
setMatricola(matricola:string)
{
  this.matricola=matricola;
}

}

