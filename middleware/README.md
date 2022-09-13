# SERVER

This directory contains your Server files.

Nuxt automatically scans files inside the `~/server/api`, `~/server/routes`, and `~/server/middleware` directories to register API and server handlers with HMR support.

Each file should export a default function defined with `defineEventHandler()`.

The handler can directly return JSON data, a `Promise` or use `event.res.end()` to send response.

More information about the usage of this directory in [the documentation](https://v3.nuxtjs.org/guide/directory-structure/server).
