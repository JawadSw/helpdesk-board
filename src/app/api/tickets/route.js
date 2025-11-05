export async function GET() {
  const tickets = [
    {
      id: "t-1001",
      title: "Cannot connect to VPN",
      description: "User reports intermittent VPN connectivity errors.",
      priority: "High",
      status: "Open",
      assignee: "Unassigned",
      updatedAt: "2025-10-31T14:05:00Z"
    },
 ];
  return Response.json(tickets);
}