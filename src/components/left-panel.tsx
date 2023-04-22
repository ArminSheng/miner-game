import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as IconMiner } from "../assets/miner.svg";
import { ReactComponent as IconAsteroid } from "../assets/asteroid.svg";
import { ReactComponent as IconPlanet } from "../assets/planet.svg";
import { Tab } from "@headlessui/react";
import { IconTab } from "./ui/icon-tab";
import { useState } from "react";
import { useSocket } from "../data";
import { AsteroidTab } from "./asteroid-tab";
import { PlanetTab } from "./planet-tab";
import { MinerTab } from "./miner-tab";

const Tabs = [
  { name: "Miners", icon: <IconMiner />, component: MinerTab },
  { name: "Asteroids", icon: <IconAsteroid />, component: AsteroidTab },
  { name: "Planets", icon: <IconPlanet />, component: PlanetTab },
];

export function LeftPanel() {
  const [selected, setSelect] = useState(0);
  const [data] = useSocket();

  return (
    <>
      <div className="p-6">
        <LogoTitle />
      </div>

      {/* 3 Tabs */}
      <div className="px-8">
        <Tab.Group selectedIndex={selected} onChange={setSelect}>
          <Tab.List>
            {Tabs.map((t, idx) => (
              <Tab key={t.name} className="focus:outline-none">
                <IconTab
                  icon={t.icon}
                  name={t.name}
                  selected={selected === idx}
                />
              </Tab>
            ))}
          </Tab.List>
          <div className="mx-[-32px] mt-8 border-b-[0.5px] border-[#33344B]"></div>
          <Tab.Panels>
            {Tabs.map((t, idx) => (
              <Tab.Panel key={t.name}>
                <t.component key={idx} data={data} />
              </Tab.Panel>
            ))}
            {/* <Tab.Panel>Content 1</Tab.Panel> */}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}

function LogoTitle() {
  return (
    <div className="flex items-center text-white">
      <Logo />
      <span className="ml-2 text-sm">BACKEND MINER</span>
    </div>
  );
}
