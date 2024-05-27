import Link from "next/link"

function MenuItem({title, address, Icon}) {
  return (
    <div>
      <Link href={address} className="hover:text-amber-600 text-white font-semibold">
        <Icon className="sm:hidden"/>
        <p className="uppercase hidden sm:inline-block"> {title}</p>
        </Link>
    </div>
  )
}

export default MenuItem
