import { RegisterInput } from '@auth/types'
import { pb } from '@lib/pocketbase'
import { useMutation } from '@tanstack/react-query'
import { useLocation } from 'wouter'

export function useLogin() {
  const [location, navigate] = useLocation()

  async function login({ email, password }: RegisterInput) {
    await pb.collection('users').authWithPassword(email, password)
  }

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate('/')
    },
  })
}
