import { Injectable } from '@nestjs/common';
import { Parcel } from './entity/parcel.entity';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class ParcelsService {
    private parcels: Parcel[] = [];

    async findAll(sort: 'asc' | 'desc' = 'asc'):Promise<Parcel[]> {
        return sort === 'asc'
            ? this.parcels.sort(this.sortAsc)
            : this.parcels.sort(this.sortDesc);
    }

    async findFeatured(): Promise<Parcel[]> {
        return this.parcels.filter((parcel): boolean => parcel.featured);
    }

    async findOne(id: string): Promise<Parcel> {
        return this.parcels.find((parcel => parcel.id === id));
    }

    async create(createParcelDto: CreateParcelDto) {
        const newParcel = { ...createParcelDto, id: randomUUID() };
        this.parcels.push(newParcel);

        return newParcel;
    }

    sortAsc(a: Parcel, b: Parcel): number {
        return (a.dateSent > b.dateSent) ? 1 : -1;
    }
    sortDesc (a: Parcel, b: Parcel): number {
        return (a.dateSent < b.dateSent) ? 1 : -1;
    }
 }
