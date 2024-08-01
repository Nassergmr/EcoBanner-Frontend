export default function Button_main_drawer({ children }) {
  return (
    <button
      className="bg-primary_1  py-2 font-bold text-white rounded-lg
            hover:bg-purple-600 text-sm transition duration-75 ease-in w-full
          "
    >
      {children}
    </button>
  );
}
