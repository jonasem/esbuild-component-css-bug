/*
 * Copyright (c) 2022 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

const esbuild = require('esbuild');

 esbuild.build(
     {
        entryPoints: ['./index.ts'],
        format: 'iife',
        outdir: './dist',
        target: 'chrome89',
        sourcemap: true,
        metafile: false,
        minify: process.argv.includes('--prod'),
        bundle: true,
        logLevel: 'info',
        external: [        ],
        loader: {
            '.json': 'json',
            '.gif': 'file',
            '.svg': 'file',
            '.png': 'file',
            '.woff': 'file',
            '.woff2': 'file',
            '.eot': 'file',
            '.ttf': 'file',
         },
         
    }

);
