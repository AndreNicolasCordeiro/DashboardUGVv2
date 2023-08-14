const { exec } = require('child_process');
const path = require('path');
require('dotenv').config();

const {
  PGDATABASE,
  PGHOST,
  PGPASSWORD,
  PGPORT,
  PGUSER
} = process.env;

const backupFilePath = path.join(__dirname, 'backup.sql');

const command = `pg_dump -U ${PGUSER} -h ${PGHOST} -d ${PGDATABASE} > ${backupFilePath}`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error('Erro ao fazer o backup do banco de dados:', error);
    return;
  }
  console.log('Backup concluído com sucesso.');
});
