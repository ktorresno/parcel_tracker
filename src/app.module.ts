import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParcelsModule } from './parcels/parcels.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [ ParcelsModule, CustomersModule ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
