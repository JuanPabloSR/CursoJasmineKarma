import {  InputsOutputsComponent } from "./InputsOutputs";

describe('Probando inputs y outpus', ()=>{
  let componete: InputsOutputsComponent;


  beforeEach(()=>{
    componete = new InputsOutputsComponent();
  });

  it('Probando Input', ()=>{
    expect(componete.entrada).toBe('default');
    componete.borrarEntrada();
    expect(componete.entrada).toBe('');
  });

  it('probando output', ()=>{
    const ARG: string = 'emitiendo';
    componete.emitirAlgo(ARG);
    componete.salida.subscribe(valor => {
      expect(valor).toBe(ARG);
    });
  })


})
