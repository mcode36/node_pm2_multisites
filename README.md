# Example of hosting multiple Node.js sites using Nginx and PM2

## Github
   - repo name: node_pm2_multisites
   - repo location: https://github.com/mcode36/node_pm2_multisites.git

## Folder structure

~~~~
   Node.js - Main   : Node.js app1
           - Todo   : Node.js app2
           - static : static contents: js, css, img, ...
~~~~

## NGINX setup

   - Nginx config file: Node.js/nginx-conf/main.conf
   - copy main.conf to /etc/nginx/sites-available
   - cd /etc/nginx/sites-enabled
   - sudo ln -s ../sites-available/main.conf .
 
## Manage NGINX services

   - sudo systemctl start nginx
   - sudo systemctl stop nginx
   - sudo systemctl status nginx
   - sudo systemctl reload nginx
   - sudo systemctl restart nginx

## PM2 setup

~~~~
   cd ~/Node.js/Main
   pm2 start ecosystem.config.js
   cd ~/Node.js/Todo
   pm2 start ecosystem.config.js
   pm2 save
~~~~
   
## Test run

   - Open browser
   - Assuming the ip address of the web host is 192.168.5.10, access the following url:
     - http://192.168.5.10        (Main app)
     - http://192.168.5.10/hello  (Main app's route /hello)
     - http://192.168.5.10/hola   (Main app's route /hola)
     - http://192.168.5.10/todo   (Todo app)
