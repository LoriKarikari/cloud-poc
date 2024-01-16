import { zodResolver } from '@hookform/resolvers/zod'
import { pb } from '@lib/pocketbase'
import { useForm } from 'react-hook-form'
import { useLocation } from 'wouter'
import { z } from 'zod'

const registerInputSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type RegisterInput = z.infer<typeof registerInputSchema>

export function RegisterForm() {
  const [location, navigate] = useLocation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerInputSchema),
  })

  async function handleRegister(data: RegisterInput) {
    const { email, password } = data
    try {
      await pb.collection('users').create({
        email,
        password,
        passwordConfirm: password,
      })
      navigate('/')
      await pb.collection('users').authWithPassword(email, password)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
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
