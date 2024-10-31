import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Product } from 'src/entity/product.entity';

import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  async getProducts(
    category: 'food' | 'snack' | 'supplement',
    subcategory: string,
    page: number,
    limit: number,
  ) {
    const options = {
      take: limit,
      skip: (page - 1) * limit,
    };

    const query = this.productRepository
      .createQueryBuilder('product')
      .where('product.category = :category', { category });

    if (subcategory !== 'all') {
      if (category === 'snack') {
        query
          .innerJoinAndSelect('product.snack', 'snack') // Snack 테이블과 조인
          .andWhere('snack.snack_type = :subcategory', { subcategory });
      } else if (category === 'food') {
        query
          .innerJoinAndSelect('product.food', 'food') // Food 테이블과 조인
          .andWhere('food.food_type = :subcategory', { subcategory });
      } else if (category === 'supplement') {
        query
          .innerJoinAndSelect('product.supplement', 'supplement') // Supplement 테이블과 조인
          .andWhere('supplement.supplement_type = :subcategory', {
            subcategory,
          });
      }
    }

    const products = await query
      .skip(options.skip)
      .take(options.take)
      .getMany();

    return products;
  }

  async getProductById(productId: string) {
    const product = await this.productRepository.findOne({
      where: { productId },
      relations: ['food', 'snack', 'supplement'],
    });

    if (!product) {
      throw new Error('Product not found');
    }

    return product;
  }
}
