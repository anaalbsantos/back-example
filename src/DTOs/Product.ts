import { z } from 'zod';

export const Product = z.object({
  name: z.string({
    invalid_type_error: 'O nome deve ser uma string',
    required_error: 'O nome é obrigatório',
  }),
  value: z
    .number({
      invalid_type_error: 'O preço deve ser um número',
      required_error: 'O preço é obrigatório',
    })
    .min(0.01, { message: 'O preço deve ser maior que 0' }),
  image: z.string({
    invalid_type_error: 'A imagem deve ser uma string',
    required_error: 'A imagem é obrigatória',
  }),
});
