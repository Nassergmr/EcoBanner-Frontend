export default function Button_secondary({children}) {
  return (
    <button
      className="bg-gray-400 px-5 py-2 font-bold text-white rounded-lg
          hover:bg-gray-500 text-sm transition duration-75 ease-in hidden sm:block 
        "
    >
      {children}
    </button>
  )
}