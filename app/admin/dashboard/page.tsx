// app/admin/dashboard/page.tsx
export const dynamic = 'force-dynamic'; // optional, safe to keep

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome to your Goldrock Safaris admin panel
        </p>
      </div>

      {/* Minimal static cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-4 border rounded-md shadow-sm">
          <h2 className="text-sm font-medium">Total Itineraries</h2>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="p-4 border rounded-md shadow-sm">
          <h2 className="text-sm font-medium">Total Bookings</h2>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="p-4 border rounded-md shadow-sm">
          <h2 className="text-sm font-medium">Total Guests</h2>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="p-4 border rounded-md shadow-sm">
          <h2 className="text-sm font-medium">Pending Bookings</h2>
          <p className="text-2xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
}
