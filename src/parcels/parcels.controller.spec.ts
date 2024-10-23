import { Test, TestingModule } from '@nestjs/testing';
import { ParcelsController } from './parcels.controller';
import { ConfigModule } from '../config/config.module';
import { ParcelsService } from './parcels.service';
import { ConfigService } from '../config/config.service';

describe('ParcelsController', () => {
  let controller: ParcelsController;

  const mockFindOne = jest.fn();

  const mockParcelsService = {
    findAll: async () => [{ id: 'id' }],
    findFeaturedParcels: async () => [{ id: 'id' }],
    findOne: mockFindOne,
    create: async () => ({ id: 'id' }),
  }

  const mockConfigService = {
    checkNoResult: () => ({ id: 'id' }),
    throwNotFoundException: mockFindOne,
  }

  beforeEach(async () => {
    jest.resetAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      controllers: [ParcelsController],
      providers: [
        { provide: ParcelsService, useValue: mockParcelsService},
        { provide: ConfigService, useValue: mockConfigService},
      ],
    }).compile();

    controller = module.get<ParcelsController>(ParcelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findOne', () => {
    describe('When parcel is found', whenParcelIsFound);

    function whenParcelIsFound() {
        const parcelId = 'id';
        const courierTest = 'UPS';
        const mockResult = { id: parcelId, courier: courierTest };

        function preparation () {
          mockFindOne.mockResolvedValue(mockResult)
        }

        beforeEach(preparation);

        it('should call the service with correct params', async () => {
          await controller.findOne(parcelId);
          expect(mockFindOne).toHaveBeenCalledWith(parcelId);
        });

        it('should return correct response', async () => {
          const result = await controller.findOne(parcelId);
          console.log('TEST When FOUND: ' , result);
          expect(result).toEqual(mockResult);
        });
    }
    /* describe('When parcel is not found', ()=> {
      // const parcelId = 'id2';

      function preparation() {
        mockFindOne.mockResolvedValue(undefined)
      }

      beforeEach(preparation);

       test('Should throw an error', async() => {
        const result = await controller.findOne(parcelId);
        console.log('**** TEST not Found: ', result);
        expect(result).rejects.toThrow('Entity not found');
        expect.assertions(1);
      })

    }); */
  });

});
