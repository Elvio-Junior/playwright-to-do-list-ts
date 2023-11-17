import { test, expect } from '@playwright/test';
import { viaCepSchema } from '../../helpers/viaCepSchema';
import { validateJson } from '../../util/jsonValidator';
 
test.describe('Realizar testes da Api de consulta de Cep', () => {

    const cepValido: string = '14400010';

    test('Deve buscar Cep valido', async ({ request }) => {
        const newRequest = await request.get(`https://viacep.com.br/ws/${cepValido}/json/`);
        expect(newRequest.ok()).toBeTruthy();
        await expect(newRequest).toBeOK(); // Status code 200..299
        expect(validateJson(await newRequest.json(), viaCepSchema)).toBe(true);
    });

});