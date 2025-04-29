/* eslint-disable prettier/prettier */

import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/datasource';
import { InventoryModule } from './inventory/inventory.module';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';
import { CurrentUserMiddleware } from './utility/middlewares/current-user.middleware';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), InventoryModule, UsersModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CurrentUserMiddleware)
      .forRoutes({path: '*', method: RequestMethod.ALL});
  }
}
