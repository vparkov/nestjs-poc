import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as main from './main';

jest.mock('@nestjs/core', () => {
  return {
    NestFactory: {
      create: jest.fn().mockImplementation(() => ({
        listen: jest.fn(),
      })),
    },
  };
});

describe('Main', () => {
  it('should bootstrap the application', async () => {
    const createSpy = jest.spyOn(NestFactory, 'create');
    const listenSpy = jest.spyOn(NestFactory, 'create').mock.results[0].value
      .listen;

    await main.bootstrap();

    expect(createSpy).toBeCalledWith(AppModule);
    expect(listenSpy).toBeCalledWith(3000);
  });
});
