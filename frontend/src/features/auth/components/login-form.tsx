import { useLogin } from '@auth/hooks/use-login'
import { registerInputSchema } from '@auth/schemas'
import { RegisterInput } from '@auth/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export function LoginForm() {
  const { mutate: login } = useLogin()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerInputSchema),
  })

  async function handleLogin(data: RegisterInput) {
    const { email, password } = data
    try {
      await login({ email, password })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div>
        <label>Email address</label>
        <input type="email" {...register('email')} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register('password')} />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}
