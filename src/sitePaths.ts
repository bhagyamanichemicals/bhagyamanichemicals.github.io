export const getSiteBase = () => (import.meta.env.BASE_URL || '/').replace(/\/+$/, '') || '/'

export const buildSitePath = (path: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const base = getSiteBase()

  if (!base || base === '/') {
    return normalizedPath
  }

  return `${base}${normalizedPath === '/' ? '/' : normalizedPath}`
}

export const getCurrentRoute = (pathname = window.location.pathname) => {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'
  const base = getSiteBase()

  if (base && base !== '/' && normalizedPath.startsWith(base)) {
    const withoutBase = normalizedPath.slice(base.length) || '/'
    return withoutBase === '' ? '/' : withoutBase
  }

  return normalizedPath
}
