import { program } from 'commander'


program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>', 'first file path')
  .argument('<filepath2>', 'second file path')


  program.command('gendiff')
  .option('-V, --version', 'output the version number')
  .option('-h, --help', 'output usage information')
  .option('-f, --format <type> ', 'output format')
  
   
program.parse();

const options = program.opts();
if (options.version) console.log('output the version number');
if (options.help) console.log('output usage information');
if (options.format) console.log('output format');
