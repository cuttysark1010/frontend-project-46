import { program } from 'commander'
const gendiff = () =>{
};

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0');

  program.command('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-h, --help', 'output the version number')
   
program.parse(process.argv);

const options = program.opts();
if (options.version) console.log('output the version number');
if (options.help) console.log('output the version number');
