import { pb } from '@lib/pocketbase'

export function HomePage() {
  const loggedIn = pb.authStore.isValid.toString()
  return <div>Logged in? {loggedIn}</div>
}
