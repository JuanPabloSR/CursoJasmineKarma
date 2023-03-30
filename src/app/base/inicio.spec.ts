import { uno, dos, tres } from './Inicio';
describe('Probando incio', () => {
  it('Probando test #1', () => {
    const resultado = uno();
    expect(resultado).toEqual('Hola que hace');
  });

  it('Debe retornar una cadena que contenga el argumento test #2', () => {
    const resultado = dos('Sofka');
    expect(resultado).toBe('Hola Sofka');
    expect(resultado).toContain('Sofka');
  });

  it('Debe retornar un arreglo test #3', () => {
    const resultado = tres('SofkaU');
    expect(resultado).toContain('SofkaU');
    expect(resultado.length).toEqual(3);
  });




});
