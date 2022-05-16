import Dummy from "@/components/Dummy";
import Meta from "@/defaults/Meta";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Meta title="Home" desc="This is a description" />
      Hello World!
      <Dummy />
    </div>
  );
};

export default Home;
