import React from 'react'
import { Link} from "react-router-dom";


export default function About() {
  return (
    <div>
    Homepage
    <br />
    {/* SPA'larda href kullanımı yanlıştır. */}
    <Link to={"/about"}>About'a Git</Link>
  </div>
  )
}
