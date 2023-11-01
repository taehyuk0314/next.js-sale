import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '로그인',
}
 
export default function Mypage() {
  return <Link href="/mypage">Mypage</Link> 
}