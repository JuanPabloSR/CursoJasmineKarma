import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-input',
  templateUrl: './InputsOutputs.html',
  styleUrls: ['./InputsOutputs.scss']
})

export class InputsOutputsComponent {
  @Input('entrada') entrada: string = 'default';
  @Output() salida: EventEmitter<string>;

  constructor() {
    this.salida = new EventEmitter<string>();
  }

  public emitirAlgo(arg: string): void {
    this.salida.emit(arg);
  }


  public borrarEntrada(): void {
    this.entrada = '';
  }

}
