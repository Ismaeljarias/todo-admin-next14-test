export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";

import { Metadata } from "next";
import { NewTodo, TodosGrid } from "@/todos";
import prisma from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Server Todos Page",
  description: "Server todos page for the application",
};
export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <>
      <span className="text-3xl mb-10">Server Actions</span>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </>
  );
}
