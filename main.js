//    en el cotizador el costo del seguro depende del presio del auto es decir si es menor a 135000, el precio sera obtenido de la tabla dependiendo de la tabla de precios 
//   el porcentaje podra se seleccionado hasta por un monto maximo de 12% a criterio del vendedor ;<----
//    si el precio es mayor a 135000 el precio del seguro sera igual al 12% del valor total del auto
// por decreto el presidento otorogo un subcidio dependiendo el año de fabricacion del auto quedando de la siguiente forma 
//si el auto esta en el rango de fabribacion esta: entre 1980 y 1992 se hara un descuento de 1300
//                                                 entre 1993 y 1998 se hara un descuento de 1000      
//                                                 entre 1999 y 2005 se hara un descuento de 900
// ademas de el subsidio dependiendo del año del auto el gobierno a autorizado hacer un recorte al 50% en el iva
//a todos los vehiculos por el covid 19 
// 
/**
 * 
 * @description esta funcion retornara el valor del seguro auto mensual 
 */
 let costoDelSeguro = () => {
    let costoDelAuto = parseInt(prompt("inserte costo del auto "));
    let costoDelInteres = parseInt(prompt("inserte interes  de la tabla por  auto "));
        if (costoDelAuto <= 135000){ 
       let porcentaje = costoDelInteres * .01;
       let costoSeg = costoDelAuto  * porcentaje;
       return costoSeg;
    } else {
        let costoSeg = (12 * .001) * costoDelAuto;
        return costoSeg;
        }
       } 
       
/**
 * 
 * @description esta funcion retornara el descuento en caso de que el auto este en el rango indicado para ser elegible 
 */
let promoAutoViejo = (costoSeg) => {
    let añoDelAuto = parseInt(prompt("inserte año del auto"));
    if(añoDelAuto <= 2005 && añoDelAuto >= 1999){
        
      return costoSeg - 900; 
    } else if (añoDelAuto <= 1998 && añoDelAuto >= 1993) {
         
        return costoSeg - 1000;
    } else if ( añoDelAuto <= 1998 && añoDelAuto >= 1993){
         
        return costoSeg - 1000; 
    } else if (añoDelAuto <= 1992 && añoDelAuto >= 1980){
         
        return costoSeg - 1300;
    } else {
         
        return costoSeg
    }
    
}  

/**
 * 
 * @param {costo menos el subsidio} costoSeg 
 * @description 
 */
 let ivaDes =(costoSeg)=> {
       let iva =(.021 / 2) * costoSeg; 
       let total = costoSeg - iva;
       return total;
}
       
       let costo = costoDelSeguro();
       let promo = promoAutoViejo(costo);
       let ivaDe = ivaDes(promo)
        document.write(`el precio de su seguro es ${costo} <br>`);
        document.write(`el descuento por el año del carro es: ${promo} <br>`);
        document.write(`el costo total es: ${ivaDe} <br>`);