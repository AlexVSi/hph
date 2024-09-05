import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './orders.model';
import { GetOrdersDto } from './dto/get-orders.dto';
import { User } from 'src/users/users.model';
import { CreateOrderDto } from './dto/create-order.dto';
import { BasketsService } from 'src/baskets/baskets.service';
import { StatusesService } from 'src/statuses/statuses.service';
import { Product } from 'src/products/products.model';
import { SetStatusDto } from './dto/set-status.dto';
import { CancleOrderDto } from './dto/cancle-order.dto';

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Order) private orderRepository: typeof Order,
                private basketsService: BasketsService,
                private statusesService: StatusesService) { }

    async getOrders(dto: GetOrdersDto) {
        const orders = this.orderRepository.findAll({ where: { userId: dto.userId }, include: [User] })
        return orders
    }

    async getAllOrders() {
        const orders = await this.orderRepository.findAll()
        return orders
    }

    async createOrder(dto: CreateOrderDto) {
        const products: Product[] = await this.basketsService.getBasket({userId: dto.userId})
        const totalPrice = this.calcTotalPrice(products)
        const statusId = await this.statusesService.getStatus('CREATE')
        const order = await this.orderRepository.create({...dto, totalPrise: totalPrice, statusId: statusId})
        for (let i of products) {
            await order.$add('products', [i.id])
        }
        return order
    }

    async setStatus(dto: SetStatusDto) {
        const order = await this.orderRepository.findByPk(dto.orderId)
        order.statusId = dto.statusId
        await order.save()
        return order
    }

    async cancelOrder(dto: CancleOrderDto) {
        const order = await this.orderRepository.findByPk(dto.orderId)
        const statusId = await this.statusesService.getStatus('CANCLE')
        order.statusId = statusId
        await order.save()
    }

    calcTotalPrice(products: Product[]) {
        let totalPrice = 0
        for (let i of products) {
            if (i.sale > 0) {
                totalPrice += i.price * (100 - i.sale / 100)
            } else {
                totalPrice += i.price
            }
        }
        return totalPrice
    }
}
