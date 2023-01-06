// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
type GetSessionResult = Promise<Session | null>;

type Session = {
  user?: {
    id?: string | null
  }
  expires?: ISODateString
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
    session: Session | null;
  }
	interface PageData {
    user?: User | null;
  }
	// interface Platform {}
  
}