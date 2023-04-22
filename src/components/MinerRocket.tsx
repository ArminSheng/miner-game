import { Miner } from "../data";
import { ReactComponent as IconMiner } from "../assets/miner.svg";
import { useMemo } from "react";
import { mapPosition } from "../common";

export function MinerRocker({ item }: { item: Miner }) {
  const { x, y } = useMemo(() => {
    return mapPosition({ x: item.x, y: item.y });
  }, [item.x, item.y]);

  return (
    <IconMiner
      style={{
        left: x,
        top: y,
        transform: `rotate(-${item.angle}deg)`,
      }}
      className="absolute transition-all ease-linear duration-[1100ms]"
    />
  );

  //   const angle = useMemo(() => {
  //     return getAngle(
  //       item.x,
  //       item.y,
  //       item.targetType === "Asteroid"
  //         ? item.target.position.x
  //         : item.planet.position.x,
  //       item.targetType === "Asteroid"
  //         ? item.target.position.y
  //         : item.planet.position.y
  //     );
  //   }, [
  //     item.planet.position.x,
  //     item.planet.position.y,
  //     item.target.position.x,
  //     item.target.position.y,
  //     item.targetType,
  //     item.x,
  //     item.y,
  //   ]);
}
