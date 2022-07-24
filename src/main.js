import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    return (
      <main>
        <HornedBeast
          title="Rhino Family"
          src={require("./img/Rhino-Family.jpg")}
          alt="Rhino Family"
          description="The rhino family is a group of horned animals that are closely related to the elephant family. The rhino is the largest of the horned animals and is the largest land-living animal in the world. The rhino is a herbivore, meaning it eats only plant and animal food. The rhino is the largest land-living animal in the world and is the largest land-living animal in the world."
        />

        <HornedBeast
          title="Kobus ellipsiprymnus"
          src={require("./img/Kobus-Ellipsiprymnus.jpg")}
          alt="Kobus ellipsiprymnus"
          description="The kobus is a large, long-nosed, long-tailed, nocturnal, and sometimes aggressive animal. The kobus is a herbivore, meaning it eats only plant and animal food. The kobus is the largest land-living animal in the world and is the largest land-living animal in the world."
        />
      </main>
    );
  }
}

export default Main;
