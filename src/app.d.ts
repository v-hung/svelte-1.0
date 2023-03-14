// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
type GetSessionResult = Promise<Session | null>;

type SessionUserType = {
  user: {
    id: string
  }
  expires?: ISODateString
}

type Session = {
  client: SessionUserType | null

  admin: {
    user: {
      id: string
    }
    expires?: ISODateString
  } | null;
}

type User = {
  id: string;
  name: string;
  email: string;
  image: string;
}

declare namespace App {
	// interface Error {}
	interface Locals {
    session: Session;
  }
	interface PageData {
    // user?: User | null;
  }
	// interface Platform {}
  
}