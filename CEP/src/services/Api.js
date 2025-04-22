//Api:'http://viacep.com.br/ws/'+cep+'/json/'
//URL: viacep.com.br/ws/01001000/json/ 

import axios from 'axios';

export async function buscarCep(cep) {
  if (cep.length === 8) {
    try {
      const response = await axios.get(`http://viacep.com.br/ws/${cep}/json/`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      throw error;
    }
  } else {
    throw new Error('Por favor, insira um CEP válido com 8 dígitos.');
  }
}
