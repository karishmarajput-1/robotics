import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'arrobo.db');
const db = new sqlite3.Database(dbPath);

// Make admin user
db.run("UPDATE users SET role = 'admin' WHERE email = 'admin@test.com'", function(err) {
  if (err) {
    console.error('Error:', err.message);
  } else {
    console.log('✅ Admin role assigned to admin@test.com');
    console.log('Now try creating a job as admin!');
  }
  db.close();
});
