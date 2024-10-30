import { http, HttpResponse } from 'msw';
import food from '@/mocks/data/food.json';
import snack from '@/mocks/data/snack.json';
import supplement from '@/mocks/data/supplement.json';

export const handlers = [
    http.get('/api/product', () => {
        const data = [...food, ...snack, ...supplement];
      return HttpResponse.json(data);
    }),

    http.get('/api/product/food', () => {
      return HttpResponse.json(food);
    }),

    http.get('/api/product/snack', () => {
      return HttpResponse.json(snack);
    }),

    http.get('/api/product/supplement', () => {
      return HttpResponse.json(supplement);
    }),
  ];
