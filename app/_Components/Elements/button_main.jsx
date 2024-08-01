export default function Button_main({ children}) {
  return (
    <button
      className="bg-primary_1  px-5 py-2 font-bold text-white rounded-lg
          hover:bg-purple-600 text-sm transition duration-75 ease-in hidden sm:block
        "
    >
      {children}
    </button>
  );
}
