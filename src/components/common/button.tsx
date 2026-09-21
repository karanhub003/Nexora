type Children={
    children: String,
}

export default function button({children}:Children) {
  return (
    <div>
        <button>{children}</button>
    </div>
  )
}
