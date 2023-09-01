import biciesto from "./sumador.js";

describe("Es bisiesto", () => {
  
  it("deberia retornar que es bisiesto", () => {
    expect(biciesto(2024)).toEqual("Es bisiesto");
  });
  it("deberia retornar que no es bisiesto", () => {
    expect(biciesto(2009)).toEqual("No es bisiesto");
  });
  
  it("deberia retornar que no es bisiesto", () => {
    expect(biciesto(1997)).toEqual("No es bisiesto");
  });
});