import { resolve } from 'path';

import { errorHandler } from '../errorHandler.js';
import { appData } from '../appData.js';

import { exists } from '../../utils/exists.js';

export const validator = {
   isEmptyArg: arg => !arg,
   isNotEmptyArg: arg => !!arg,
   hasExistPath: arg => exists(resolve(appData.cwd, arg)),
};

export const validate = async (callback, argLine, validators) => {
   if (validators.length === 1) {
      const [ validator ] = validators;

      return validator(argLine) ? callback(argLine) : errorHandler.invalidInput();
   }

   const args = argLine.split(' ');

   if (args.length === validators.length) return callback(...args);
   if (validators.length === 2 && args.length > validators.length) {
      const validations = [];

      for (let i = args.length - 1; i > 0; i--) {
         const list = [
            args.slice(0, i).join(' '),
            args.slice(i, args.length).join(' ')
         ];

         validations.push(new Promise(async (resolve, reject) => {
            const promises = validators.map((validator, id) => validator(list[id]));
            const results = await Promise.all(promises);

            if (results.every(result => !!result)) {
               resolve(list);
            } else {
               reject();
            }
         }));
      }

      try {
         const result = await Promise.any(validations);

         return callback(...result);
      } catch (error) {
      }
   }

   return errorHandler.invalidInput();
};
