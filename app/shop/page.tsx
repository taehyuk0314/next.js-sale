import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '로그인',
}
 
export default function Shop() {
  return <Link href="/mypage">상품들</Link> 
}