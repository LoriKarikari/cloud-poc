import { pb } from '@lib/pocketbase'
import { useQueryClient } from '@tanstack/react-query'

export function useLogout() {
  const queryClient = useQueryClient()
  function logout() {
    pb.authStore.clear()
    queryClient.fetchQuery({ queryKey: ['user'] })
  }

  return { logout }
}
