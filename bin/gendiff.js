import { program } from 'commander'


program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>', 'first file path')
  .argument('<filepath2>', 'second file path')
  .option('-f, --format <type>', 'output format')
  .option('-h, --help', 'output usage information')
  .option('-V, --version', 'output the version number')
  program.command('gendiff')
  
  
   
program.parse();