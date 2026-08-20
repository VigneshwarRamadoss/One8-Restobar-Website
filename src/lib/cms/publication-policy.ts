import type { ContentStatus } from './types';

/**
 * Determines whether a content item is publishable in the given environment.
 * In production, ONLY records with status === 'client-approved' are publishable.
 * In development or explicitly enabled preview mode, 'source-draft' records are permitted.
 */
export function isContentPublishable(
  status: ContentStatus,
  environment: string = process.env.NODE_ENV || 'development'
): boolean {
  if (status === 'archived') {
    return false;
  }

  const isPreview = process.env.NEXT_PUBLIC_PREVIEW_MODE === 'true';
  const isDev = environment !== 'production' || isPreview;

  if (isDev) {
    return status === 'client-approved' || status === 'source-draft';
  }

  return status === 'client-approved';
}
