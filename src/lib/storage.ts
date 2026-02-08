const GATEWAY_URL_KEY = 'edon.gatewayUrl'
const TOKEN_KEY = 'edon_token'
const INTENT_ID_KEY = 'edon.intentId'

const DEFAULT_GATEWAY_URL = 'http://127.0.0.1:8000'

const logStorageError = (error: unknown): void => {
  if (import.meta.env.DEV) {
    console.warn('Local storage unavailable', error)
  }
}

export function getGatewayUrl(): string {
  try {
    const u = localStorage.getItem(GATEWAY_URL_KEY)
    if (u && u.trim()) return u.trim().replace(/\/+$/, '')
  } catch (error) {
    logStorageError(error)
  }
  return DEFAULT_GATEWAY_URL
}

export function setGatewayUrl(url: string): void {
  localStorage.setItem(GATEWAY_URL_KEY, url.trim().replace(/\/+$/, ''))
}

/** Single source of truth: localStorage key "edon_token". No alternate keys or env fallbacks. */
export function getToken(): string {
  try {
    return localStorage.getItem(TOKEN_KEY) ?? ''
  } catch (error) {
    logStorageError(error)
  }
  return ''
}

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token)
}

export function getIntentId(): string {
  try {
    return localStorage.getItem(INTENT_ID_KEY) || ''
  } catch (error) {
    logStorageError(error)
  }
  return ''
}

export function setIntentId(intentId: string): void {
  localStorage.setItem(INTENT_ID_KEY, intentId)
}
