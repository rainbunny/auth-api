import type {Resolver} from '@core';
import type {UserService} from '@auth/interfaces';
import type {AwilixContainer} from 'awilix';
import {convertHandlersToResolvers} from '@core';

export const resolvers = (container: AwilixContainer): Resolver =>
  convertHandlersToResolvers({
    Query: {
      users: container.resolve<UserService>('userService').find,
      user: container.resolve<UserService>('userService').getById,
    },
    Mutation: {
      users: {
        registerWithToken: container.resolve<UserService>('userService').registerWithToken,
        generateToken: container.resolve<UserService>('userService').generateToken,
      },
    },
  });
