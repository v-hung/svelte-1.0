
import { browser } from '$app/environment'; 

type OauthProvider = 'github' | 'facebook' | 'google'

type OauthOption = {
  redirect_uri: string
}

export const signIn = async (provider: OauthProvider, options?: OauthOption) => {
  if (!browser) return

  // if (provider == "github") {
  //   let redirect_uri = window.location.origin + ( options?.redirect_uri || "auth/callback/github" )
  //   window.location
  // }
  fetch('/api/v1/auth/oauth', {
    method: 'post',
    body: JSON.stringify({
      provider: provider
    }),
    redirect: 'follow'
  })
  .then(res => res.json())
  .then(data => {
    window.location.replace(data.redirect_uri)
  })
}

export const signOut = async () => {

}