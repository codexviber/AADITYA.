import { createFileRoute } from "@tanstack/react-router";
import AdminApp from "@/portfolio/components/AdminApp";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

function AdminPage() {
  return <AdminApp />;
}
