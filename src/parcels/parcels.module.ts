import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { ParcelsController } from './parcels.controller';
import { ParcelsService } from './parcels.service';
import { ConfigService } from 'src/config/config.service';

@Module({
    imports: [ ConfigModule ],
    controllers: [ParcelsController],
    providers: [ParcelsService, ConfigService]
})
export class ParcelsModule { }
