import { wait } from "@/lib/wait";
import React from "react";
import { Suspense } from "react";
export default function DashboardLayout({ children }) {
  return (
    <>
      <nav>Some Random Link</nav>
      {children}
      <h1>Dashboard Layout</h1>
      <Suspense fallback={<h2>Loading Users ....</h2>}>
        <Users />
      </Suspense>
      <Suspense fallback={<h2>Loading Articles ....</h2>}>
        <Articles />
      </Suspense>
    </>
  );
}

async function Users() {
  await wait(5000);
  return <h2>Users</h2>;
}
async function Articles() {
  await wait(8000);
  return <h2>Articles</h2>;
}
