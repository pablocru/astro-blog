// Source: https://docs.astro.build/en/guides/integrations-guide/sitemap/#usage

import type { APIRoute } from 'astro';

const robotsTxt = `
User-agent: *
Allow: /
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};