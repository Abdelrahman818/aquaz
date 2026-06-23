'use client';

import { useRouter } from "next/navigation";

export const Btn = ({ classes, route, innerText }) => {
  const router = useRouter();
  return (
    <button className={classes} onClick={() => router.push(route)}>{innerText}</button>
  )
}
