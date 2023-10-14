import { Link } from "react-router-dom"

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg  mx-auto'>
      <h1 className='text-3xl text-center text-semibold my-7'> Signup </h1>
      <form className='flex flex-col gap-5'>
        <input type="text" placeholder='Username' className='border p-3 rounded-lg'  id='username'/>
        <input type="email" placeholder='Email' className='border p-3 rounded-lg'  id='email'/>
        <input type="password" placeholder='Password' className='border p-3 rounded-lg'  id='password'/>

        <button className='bg-slate-500 text-white p-3 rounded-lg uppercase hover:bg-orange-300 disabled:opacity-80'>Signup</button>

      </form>
      <div className="flex gap-2 mt-5">
        <p>
          Have an account?
        </p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700 text-bold">Signin</span>
        </Link>
      </div>
    </div>
  )
}
