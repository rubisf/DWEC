// UT5 - Ejemplo 4: Constraint Validation
if (typeof document !== 'undefined') {
    const input = document.createElement("input");
    input.type = "email";
    input.value = "correo-invalido";
    console.log("¿Input email válido?:", input.checkValidity());
}
