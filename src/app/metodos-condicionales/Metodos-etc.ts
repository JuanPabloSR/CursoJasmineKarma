
export class MetodosCondicionales {

  variable1: boolean = true;
  variable2: boolean = true;
  variable3: boolean = true;

  constructor() {
  }

   public probandoCondicionales(): string {
    if(this.variable1){
      return 'variable 1 verdadero';
    } else if(this.variable2){
      if(this.variable3){
        return 'variable 2 y 3 verdaderas';
      }
      return 'variables 2 es verdadera'
    }
    return 'todas son falsas';
   }
}
