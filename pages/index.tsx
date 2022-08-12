import type { NextPage } from 'next'
import Head from 'next/head'
import FruitsHolder from '../components/fruitsHolder'
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import Router from 'next/router'

type Props = {
  data: []
}


const Home = ({data}:Props) => {
  const [cookies, setCookie, removeCookie] = useCookies(['username', 'islogin'])
  const [user, setUser] = useState('')

  const Logout = () => {
    Router.reload()
    removeCookie('username')
    removeCookie('islogin')
  }

  useEffect(()=>{
    setUser(cookies.username)
  },[cookies])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>return key</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {user && <p className="mb-1">Hi, {user} !</p> }
        {user && <p className="mb-8" onClick={Logout}>click here to Logout</p> }
        <FruitsHolder fruits={data} username={user} />
      </main>

    </div>
  )
}

//******* Async and Await  */
// export async function getServerSideProps() {
//   const res  = await fetch('http://localhost:3000/api/fruits');
//   const data = await res.json();
//   return { props: {data}}
// }

//******* Promise  */
export async function getServerSideProps() {
  return {
      props: {
          data: await new Promise((resolve) => {
            const res  = fetch('http://localhost:3000/api/fruits').then((r) => r.json())
            resolve(res)
          })
      },
  }
}

export default Home
