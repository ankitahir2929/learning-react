import { ArrowUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-between ">
      <div className="p-6">
        <h2 className="text-7xl mb-7 font-bold ">
          Prospective <br></br> <span className="text-gray-600">customer</span>{" "}
          <br></br> Segmentation
        </h2>
        <p className="text-xl font-medium text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita
          fuga eveniet. Eveniet ut sapiente nam enim aperiam cum suscipit
          deserunt vel. Repellat aliquam similique, ducimus sunt praesentium
          fugit quaerat.
        </p>
      </div>
      <div className="text-9xl">
        <i>
          <ArrowUpRight size={128} />
        </i>
      </div>
    </div>
  );
};

export default LeftContent;
