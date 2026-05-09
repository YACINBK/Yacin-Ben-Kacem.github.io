export function withBase(path = '/') {
    if (/^(https?:|mailto:|tel:)/i.test(path)) {
        return path;
    }

    const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
    const normalized = path.startsWith('/') ? path : `/${path}`;
    const [, pathname = '/', suffix = ''] = normalized.match(/^([^?#]*)([?#].*)?$/) || [];

    if (pathname === '/') {
        return `${base}/`;
    }

    const hasExtension = /\/[^/]+\.[^/]+$/i.test(pathname);
    const routedPath = !hasExtension && !pathname.endsWith('/') ? `${pathname}/` : pathname;

    return `${base}${routedPath}${suffix}`;
}

export function absoluteUrl(path, site) {
    return new URL(withBase(path), site).toString();
}
