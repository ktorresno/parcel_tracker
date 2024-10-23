import { Body, Get, Controller, Param, Post, Query, Put, Delete, DefaultValuePipe, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { Parcel } from './entity/parcel.entity';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { ParcelsService } from './parcels.service';
import { ConfigService } from '../config/config.service';

@Controller('parcels')
export class ParcelsController {
    // Inject the service into this controller, this action let us use the
    // service's methods of our controller.
    constructor(
        private readonly parcelsService: ParcelsService,
        private readonly configService: ConfigService // Inject config service as well
    ) {}

    @Get()
    findAll(
        @Query('sort') sort: 'asc' | 'desc',
        @Query('limit', new DefaultValuePipe(100), ParseIntPipe) limit:number,
    ): Promise<Parcel[]> {
        console.log('findAll method @Query sort: ', sort);
        return this.parcelsService.findAll(sort);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Parcel> {
        let parcel: Parcel = null;
        try {
            parcel = await this.parcelsService.findOne(id);
            console.log(`findOne method @Param id: ${id} - Parcel: ${Parcel}`);
            this.configService.checkNoResult(parcel, id);

            return parcel;
        } catch (error) {
            this.configService.throwNotFoundException(error);
        }
    }

    @Get('featured')
    findFeatured(): Promise<Parcel[]> {
        return this.parcelsService.findFeatured();
    }

    @Post()
    create(@Body(ValidationPipe) input: CreateParcelDto) {
        return this.parcelsService.create(input);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateParcelDto: CreateParcelDto) {
        return `This action UPDATES a #${id} parcel`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action REMOVES a #${id} parcel`;
    }
}