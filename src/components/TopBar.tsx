import * as React from "react";
import { Button, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { useAtom } from "jotai";

import { Todo, todosAtom } from "../stores/todo_store";
import Link from "next/link";

function TopBar() {
  const [, todosSet] = useAtom(todosAtom);
  const onLoad = () => {
    fetch(
      "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json"
    )
      .then((resp) => resp.json())
      .then((tds: Todo[]) => todosSet(tds));
  };

  return (
    // <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
    //   <ColorModeSwitcher />
    // </Grid>
    <div className="flex align-middle bg-gray-600 shadow p-3">
      <Link href="/">
        <a className="text-2xl">Home</a>
      </Link>
      <Link href="/products">
        <a className="text-2xl ml-4">Products</a>
      </Link>
      <div className="flex-grow"></div>
      <Button onClick={onLoad}>Load</Button>
      <ColorModeSwitcher />
    </div>
  );
}

export default TopBar;
