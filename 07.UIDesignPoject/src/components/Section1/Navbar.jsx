const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <h4 className="text-3xl font-bold m-4 uppercase bg-black text-white rounded-full px-4 py-2">
        Target Audiance
      </h4>
      <button className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
