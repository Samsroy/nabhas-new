import { defineConfig } from 'vite';
import { ngDevServer } from '@angular/cli/dev-server';

export default defineConfig(async () => {
  const devServer = await ngDevServer(
    {
      browserTarget: 'fusion-angular-tailwind-starter:build',
    },
    createBaseHref(),
    {}
  );

  return devServer.configuration;
});

function createBaseHref() {
  const isProduction = process.env['NODE_ENV'] === 'production';
  const basePath = process.env['BASE_PATH'];
  let baseHref = `/`;

  if (isProduction && basePath) {
    baseHref = `${basePath}`;
    if (!baseHref.endsWith('/')) {
      baseHref += `/`;
    }
  }

  return baseHref;
}
