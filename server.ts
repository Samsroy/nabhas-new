import "zone.js/node";
import { ngExpressEngine } from "@nguniversal/express-engine";
import * as express from "express";
import { join } from "path";
import { APP_BASE_HREF } from "@angular/common";
import { existsSync } from "fs";

export function app(): express.Express {
  const server = express();
  const distFolder = join(
    process.cwd(),
    "dist/fusion-angular-tailwind-starter/browser",
  );
  const indexHtml = existsSync(join(distFolder, "index.original.html"))
    ? join(distFolder, "index.original.html")
    : join(distFolder, "index.html");

  server.engine(
    "html",
    ngExpressEngine({
      bootstrap: () =>
        import("./dist/server/main.server.js").then((m) => m.default),
    }),
  );

  server.set("view engine", "html");
  server.set("views", distFolder);

  // Serve static files
  server.get("*.*", express.static(distFolder, { maxAge: "1y" }));

  // All regular routes use the Universal engine
  server.get("*", (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    });
  });

  return server;
}

function run(): void {
  const port = process.env["PORT"] || 4000;
  const server = app();

  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
