import { Controller, Get, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Roles } from 'src/auth/roles-auth.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GetOrdersDto } from './dto/get-orders.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { CancleOrderDto } from './dto/cancle-order.dto';
import { SetStatusDto } from './dto/set-status.dto';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService) { }

    @Get('')
    getOrders(dto: GetOrdersDto) {
        return this.ordersService.getOrders(dto)
    }

    @Roles('Admin')
    // @UseGuards(JwtAuthGuard)
    @Get('/all')
    getAllOrders() {
        return this.ordersService.getAllOrders()
    }

    createOrder(dto: CreateOrderDto) {
        return this.ordersService.createOrder(dto)
    }

    @Roles('Admin')
    // @UseGuards(JwtAuthGuard)
    setStatus(dto: SetStatusDto) {
        return this.ordersService.setStatus(dto)
    }

    cancelOrder(dto: CancleOrderDto) {
        return this.ordersService.cancelOrder(dto)
    }
}
