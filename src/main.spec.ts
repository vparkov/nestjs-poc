import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
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

jest.mock('@nestjs/platform-fastify', () => {
  return {
    FastifyAdapter: jest.fn(),
    NestFastifyApplication: {},
  };
});

describe('Main', () => {
  it('should bootstrap the application', async () => {
    const createSpy = jest.spyOn(NestFactory, 'create');
    const listenSpy = jest.spyOn(NestFactory, 'create').mock.results[0].value
      .listen;

    await main.bootstrap();

    expect(createSpy).toBeCalledWith(AppModule, expect.any(FastifyAdapter));
    expect(listenSpy).toBeCalledWith(3000, '0.0.0.0');
  });
});
