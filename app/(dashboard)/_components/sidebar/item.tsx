import Image from "next/image";

import { cn } from "@/lib/utils";
import { Hint } from "@/components/hint";

type ItemProps = {
  id: string;
  name: string;
  imageUrl: string;
};

export const Item = ({ id, name, imageUrl }: ItemProps) => {
  const onClick = () => {};
  const isActive = true;

  return (
    <div className="aspect-square relative">
      <Hint label={name} side="right" align="start" sideOffset={18}>
        <Image
          fill
          alt={name}
          src={imageUrl}
          onClick={onClick}
          className={cn(
            "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
            isActive && "opacity-100"
          )}
        />
      </Hint>
    </div>
  );
};
