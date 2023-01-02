import { PUBLIC_APP_URL  } from '$env/static/public';

const refresh_url = PUBLIC_APP_URL + '/api/auth/refresh-token'

type typeFetch = (info: RequestInfo, init?: RequestInit | undefined) => Promise<Response>
type typeFetch2 = (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>

export const Fetch = async (url: string, options: any = undefined, originalFetch: typeFetch | typeFetch2 = fetch): Promise<Response> => {
  const res = await originalFetch(url, options)

  if (res.status === 401) {
    const response = await originalFetch(refresh_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      return response
    }

    const data = await response.json()
    
    return await originalFetch(`${url}?token=${data?.token}`)
  }

  return res
}