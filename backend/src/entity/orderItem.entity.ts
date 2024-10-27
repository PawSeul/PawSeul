import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Order } from './order.entity';
import { Product } from './product.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class OrderItem {
  @ApiProperty({ description: '주문 항목의 고유 ID' })
  @PrimaryGeneratedColumn()
  order_item_id: number;

  @ApiProperty({ description: '주문 ID', type: () => Order })
  @ManyToOne(() => Order, (order) => order.orderItems)
  order: Order;

  @ApiProperty({ description: '제품 ID', type: () => Product })
  @ManyToOne(() => Product, (product) => product.product_id)
  product: Product;

  @ApiProperty({ description: '제품 수량' })
  @Column()
  quantity: number;

  @ApiProperty({ description: '제품 가격' })
  @Column()
  price: number;
}
