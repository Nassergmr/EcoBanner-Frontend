export default function Button_secondary_drawer({children}) {
    return (
      <button
        className="bg-gray-400  py-2 font-bold text-white rounded-lg
            hover:bg-gray-500 text-sm transition duration-75 ease-in w-full
          "
      >
        {children}
      </button>
    )
  }