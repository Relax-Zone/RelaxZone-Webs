import { env } from "cloudflare:workers";
import { auth } from "./lib/auth";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { zValidator } from '@hono/zod-validator'
import z from "zod";
import { hc } from "hono/client";

const app = new Hono();

app.use(logger());
app.use(
	"/*",
	cors({
		origin: env.CORS_ORIGIN || "",
		allowMethods: ["GET", "POST", "OPTIONS"],
		allowHeaders: ["Content-Type", "Authorization"],
		credentials: true,
	}),
);

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));


const route =
app.post('/', zValidator(
    'json',
    z.object({
      title: z.string(),
      body: z.string(),
    })
), (c) => {
	return c.json({ message: c.req.json() });
})
.get("/",zValidator(
    'query',
    z.object({
      title: z.string(),
      body: z.string(),
    })
), (c) => {
	return c.json({ message: c.req.json() });
});

export const api = route;
// Export the app instance
export default app;

// Export types