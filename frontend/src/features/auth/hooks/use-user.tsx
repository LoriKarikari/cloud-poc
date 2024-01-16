import { pb } from '@lib/pocketbase'
import { useQuery } from '@tanstack/react-query'

export function useUser() {
  function getUser() {
    const userData = pb.authStore.model
    if (userData) {
      const { username, email } = userData
      return { username, email }
    }
    return null
  }

  const { data, ...rest } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  })

  return { user: data, ...rest }
}
