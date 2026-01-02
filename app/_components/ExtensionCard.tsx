import { Button, Switch } from "@/components/ui";
import Image from "next/image";

type Props = {
  extension: {
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
  };
  onRemoveExtension: (name: string) => void;
  onChangeStatus: (name: string) => void;
};

export default function ExtensionCard({
  extension,
  onRemoveExtension,
  onChangeStatus,
}: Props) {
  return (
    <div className="w-full p-4.5 flex flex-col justify-between bg-[#fcfdff] rounded-md border border-[#d9dfeb] dark:bg-[#1f2535] dark:border-[#51566a] gap-7">
      <div className="w-full flex  items-start gap-4">
        <Image
          src={extension.logo}
          alt={extension.name}
          width={60}
          height={60}
        />

        <div className="w-full flex flex-col gap-4">
          <h3 className="font-bold">{extension.name}</h3>
          <p className="font-light">{extension.description}</p>
        </div>
      </div>

      <div className="w-full flex justify-between items-center">
        <Button
          variant="ghost"
          className="hover:text-[#f8fcfd] hover:bg-[#f35b56]! dark:hover:text-[#09153d] dark:hover:border-[#a92f2c] dark:text-[#f8fcfd] dark:bg-[#1f2535] bg-[#fcfdff] cursor-pointer border border-[#c6c6c6] h-9 leading-9 rounded-4xl text-[#09153d] font-normal"
          onClick={() => {
            onRemoveExtension(extension.name);
          }}
        >
          Remove
        </Button>
        <Switch
          checked={extension.isActive}
          onCheckedChange={() => {
            onChangeStatus(extension.name);
          }}
          className="
            data-[state=checked]:bg-[#ca211a]
            data-[state=unchecked]:bg-[#c6c6c6]
            [&>span]:bg-[#fcfdff]
            "
        />
      </div>
    </div>
  );
}
