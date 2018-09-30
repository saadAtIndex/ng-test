pm2 stop NG-TEST;
git fetch;
git reset --hard origin/master;
npm run build;
cp src/admin dist -r;
npm run start-pm2;