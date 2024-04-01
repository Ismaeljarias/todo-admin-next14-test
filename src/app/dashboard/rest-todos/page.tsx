import React, { Suspense } from "react";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export default async function RestTodoPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </Suspense>
  );
}
