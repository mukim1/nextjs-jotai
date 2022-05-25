import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import TodoList from "../components/todo/TodoList";
import TodoAdd from "../components/todo/TodoAdd";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <Link href={"/products"}>Products page</Link>
        <TodoList />
        <TodoAdd />
      </Box>
    </main>
  );
};

export default Home;
