const express = require('express');
const next = require('next');
const path = require('path');
const compression = require('compression');

const nextI18NextMiddleware = require('next-i18next/middleware');

const nextI18next = require('./i18n');

const dev = process.env.NODE_ENV !== 'production';

const app = next({dev});
const handle = app.getRequestHandler();

const PORT = process.env.PORT;

app.prepare()
    .then(() => {
        const server = express();

        server.use(nextI18NextMiddleware(nextI18next));


        server.use(compression());

        server.use('/static', express.static(path.join(__dirname, '/static')));

        server.get('/', (req, res) => {
          return app.render(req, res, '/index');
        });

        server.get('/sanpham/:id', (req, res) => {
          const queryParams = {id: req.params.id};
          return app.render(req, res, '/sanpham-detail', queryParams);
        });
        
        server.get('/tintuc/:id', (req, res) => {
          const queryParams = {id: req.params.id};
          return app.render(req, res, '/tin-tuc-detail', queryParams);
        });

        server.get('*', (req, res) => {
            return handle(req, res)
        });

        server.listen(PORT, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${PORT}`)
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1)
    });
