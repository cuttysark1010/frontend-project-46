#!/usr/bin/env node

import { program } from 'commander'


program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  
 
  program.command('gendiff')
  .option('-V, --version', 'output the version number')
  .option('-f, --format <type> ', 'output format')
  .option('-h, --help', 'output usage information')

  
   
  program.parse(process.argv)