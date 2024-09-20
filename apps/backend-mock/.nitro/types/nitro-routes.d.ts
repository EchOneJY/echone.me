// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/auth/codes': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../api/auth/codes').default>>>>
    }
    '/api/auth/login': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../api/auth/login.post').default>>>>
    }
    '/api/auth/logout': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../api/auth/logout.post').default>>>>
    }
    '/api/auth/refresh': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../api/auth/refresh.post').default>>>>
    }
    '/api/menu/all': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../api/menu/all').default>>>>
    }
    '/api/status': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../api/status').default>>>>
    }
    '/api/test': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../api/test.get').default>>>>
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../api/test.post').default>>>>
    }
    '/api/user/info': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../api/user/info').default>>>>
    }
    '/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../routes/[...]').default>>>>
    }
  }
}
export {}