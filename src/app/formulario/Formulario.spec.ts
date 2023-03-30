import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { unFormulario } from './Formulario';

describe('Probando Formulario', () => {
  const component = new unFormulario(new FormBuilder());
  it('probando inicializacion del formulario', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  it('Probando validor email es requerido', () => {
    const control = component.form.get('email');
    control?.setValue('juan@gamil.com');
    expect(control?.valid).toBeTruthy();
  });
});
