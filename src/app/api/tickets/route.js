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
    {
      id: "t-1002",
      title: "Email not syncing on mobile",
      description: "Outlook mobile stuck on syncing.",
      priority: "Medium",
      status: "In Progress",
      assignee: "Jordan",
      updatedAt: "2025-10-30T16:20:00Z"
    },
    {
      id: "t-1003",
      title: "Printer queue jam on Floor 3",
      description: "Queue stuck and jobs timing out.",
      priority: "Medium",
      status: "Open",
      assignee: "Unassigned",
      updatedAt: "2025-10-31T07:00:00Z"
    },
        {
      id: "t-1004",
      title: "Laptop battery drains quickly",
      description: "Battery drops from 100% to 20% in two hours.",
      priority: "Low",
      status: "Open",
      assignee: "Unassigned",
      updatedAt: "2025-10-29T12:30:00Z"
    },
    {
      id: "t-1005",
      title: "Okta MFA prompts repeatedly",
      description: "User receives MFA prompt every time they open a new tab.",
      priority: "High",
      status: "On Hold",
      assignee: "Priya",
      updatedAt: "2025-10-28T09:21:00Z"
    },
    {
      id: "t-1006",
      title: "Teams screen share fails",
      description: "Sharing starts and immediately stops.",
      priority: "High",
      status: "Open",
      assignee: "Alex",
      updatedAt: "2025-10-30T06:00:00Z"
    },
    {
      id: "t-1007",
      title: "New hire account provisioning",
      description: "Create accounts and assign licenses.",
      priority: "Critical",
      status: "On Hold",
      assignee: "Morgan",
      updatedAt: "2025-10-31T04:45:00Z"
    },
    {
      id: "t-1008",
      title: "Wi-Fi drops in Conference Room A",
      description: "Disconnects at meeting start.",
      priority: "Medium",
      status: "Open",
      assignee: "Unassigned",
      updatedAt: "2025-10-31T08:15:00Z"
    },
        {
      id: "t-1009",
      title: "Locked out of Salesforce",
      description: "User cannot log in after password reset.",
      priority: "High",
      status: "Resolved",
      assignee: "Sam",
      updatedAt: "2025-10-29T10:05:00Z"
    },
    {
      id: "t-1010",
      title: "Zoom audio echoes",
      description: "Severe echo reported by multiple attendees.",
      priority: "Low",
      status: "Open",
      assignee: "Unassigned",
      updatedAt: "2025-10-27T06:00:00Z"
    },
    {
      id: "t-1011",
      title: "Shared drive permissions",
      description: "Access denied for new project members.",
      priority: "Medium",
      status: "On Hold",
      assignee: "Priya",
      updatedAt: "2025-10-30T13:45:00Z"
    },
    {
      id: "t-1012",
      title: "Slack notifications delayed",
      description: "Messages notify several minutes late.",
      priority: "Low",
      status: "Open",
      assignee: "Unassigned",
      updatedAt: "2025-10-31T05:55:00Z"
    },
    {
      id: "t-1013",
      title: "macOS update failing",
      description: "Installer quits at 70%.",
      priority: "Critical",
      status: "Open",
      assignee: "Jordan",
      updatedAt: "2025-10-31T03:40:00Z"
    },
    {
      id: "t-1014",
      title: "SFTP key rotation",
      description: "Rotate keys for finance integration.",
      priority: "High",
      status: "In Progress",
      assignee: "Sam",
      updatedAt: "2025-10-31T09:05:00Z"
    },
    {
      id: "t-1015",
      title: "Calendar invites not delivered",
      description: "Invites arrive hours later.",
      priority: "Medium",
      status: "Open",
      assignee: "Unassigned",
      updatedAt: "2025-10-31T08:25:00Z"
    },
    {
      id: "t-1016",
      title: "Security alert: suspicious logins",
      description: "Multiple failed logins from foreign IPs.",
      priority: "Critical",
      status: "In Progress",
      assignee: "Morgan",
      updatedAt: "2025-10-31T13:35:00Z"
    }

 ];
  return Response.json(tickets);
}