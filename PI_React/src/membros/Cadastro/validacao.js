// utils/validations.js
export function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
 
  export function isValidTelefone(telefone) {
    return /^\d{10,11}$/.test(telefone.replace(/\D/g, ''));
  }
 
  export function isValidCrmv(crmv) {
    return /^[A-Za-z0-9]{4,}$/.test(crmv);
  }
 
 