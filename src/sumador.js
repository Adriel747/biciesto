function biciesto(year) {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) 
    {
        return "Es bisiesto";
    } 
    else 
    {
        return "No es bisiesto";
    }
}

export default biciesto;
