import { useLogout } from '@auth/hooks/use-logout'
import { useUser } from '@auth/hooks/use-user'
import { pb } from '@lib/pocketbase'
import { useLocation } from 'wouter'

export function HomePage() {
  const loggedIn = pb.authStore.isValid
  const [location, navigate] = useLocation()

  const { user } = useUser()
  console.log({ user })
  const { logout } = useLogout()
  return (
    <div>
      <p>{user && user.username}</p>
      <button onClick={() => (loggedIn ? logout() : navigate('/login'))}>
        {loggedIn ? 'log out' : 'log in'}
      </button>
    </div>
  )
}
