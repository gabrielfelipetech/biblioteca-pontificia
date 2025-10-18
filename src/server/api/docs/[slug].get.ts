import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { defineEventHandler, getRouterParam, setHeader, createError } from 'h3';

export default defineEventHandler(async (e) => {
  const slug = getRouterParam(e, 'slug')!;
  const file = join(process.cwd(), 'public', 'texts', `${slug}.json`);
  try {
    const raw = await readFile(file, 'utf8');
    const data = JSON.parse(raw);
    setHeader(
      e,
      'Cache-Control',
      'public, max-age=86400, stale-while-revalidate=86400'
    );
    return data;
  } catch {
    throw createError({
      statusCode: 404,
      statusMessage: `Doc não encontrado ou JSON inválido: ${slug}`,
    });
  }
});
